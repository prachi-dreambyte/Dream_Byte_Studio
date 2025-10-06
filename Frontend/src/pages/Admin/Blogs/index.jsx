import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import debounce from "lodash.debounce";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import ReactResponsiveTable from "../../../components/super-responsive-table";
import createExcerpt from "../../../util/basic";
import Axios from "../../../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import Loader from "../../../components/loader";

const baseURL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8080/"; // adjust to your backend URL

const AllBlogs = () => {
  
  const navigate = useNavigate();
  const [blogsData, setBlogsData] = useState({
    results: [],
    page: 1,
    totalPages: 1,
    limit: 10,
  });
  const [loading, setLoading] = useState(false);

  // Fetch blogs from API
  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const res = await Axios.get("/blogs/get-all-blogs", {
        params: { page, limit: 10, status: "all" },
      });

      setBlogsData({
        results: res.data.results || [],
        page: res.data.page || 1,
        totalPages: res.data.totalPages || 1,
        limit: res.data.limit || 10,
      });
    } catch (err) {
      console.error("Error fetching blogs:", err);
      toast.error(err.response?.data?.message || "Failed to fetch blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // Delete blog
  const handleDelete = async (slug) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;
    try {
      setLoading(true);
      await Axios.delete(`/blogs/delete-blog/${slug}`);
      toast.success("Blog deleted successfully");
      fetchBlogs(blogsData.page); // refresh current page
    } catch (err) {
      console.error("Error deleting blog:", err);
      toast.error(err.response?.data?.message || "Failed to delete blog");
    } finally {
      setLoading(false);
    }
  };

  // Pagination handler
  const handlePageClick = useCallback(
    debounce((event) => {
      const selectedPage = event.selected + 1;
      fetchBlogs(selectedPage);
    }, 300),
    []
  );

  const columns = [
    { title: "Title", key: "title" },
    {
      title: "Image",
      key: "featured_image",
      render: (value) => (
        <img
          src={baseURL + value?.path}
          alt="Blog"
          width={50}
          height={50}
          style={{ objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Description",
      key: "description",
      render: (value) => createExcerpt(value, 50),
    },
    { title: "Status", key: "status" },
    {
      title: "Actions",
      key: "slug",
      render: (value, row) => (
        <>
          <button className="btn btn-sm me-2" onClick={() => navigate(`/dashboard/blogs/edit/${value}`)}>
            <CiEdit />
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => handleDelete(value)}
          >
            <MdDeleteOutline />
          </button>
        </>
      ),
    },
  ];

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>All Blogs</h1>
        <button className="btn btn-primary" onClick={() => navigate("/dashboard/blogs/add")}>
          Add New
        </button>
      </div>

      {loading && <Loader/>}

      <ReactResponsiveTable
        columns={columns}
        data={blogsData.results}
        serialize={true}
        initialCount={blogsData.limit * (blogsData.page - 1)}
      />

      {blogsData.totalPages > 1 && (
        <div className="mt-3">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            previousLabel="< Prev"
            onPageChange={handlePageClick}
            pageCount={blogsData.totalPages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName="pagination justify-content-center"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            activeClassName="active"
            forcePage={blogsData.page - 1}
          />
        </div>
      )}
    </div>
  );
};

export default AllBlogs;
