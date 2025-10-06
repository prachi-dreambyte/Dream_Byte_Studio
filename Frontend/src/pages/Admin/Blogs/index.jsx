import React, { useState, useEffect, useCallback } from "react";
import ReactPaginate from "react-paginate";
import debounce from "lodash.debounce";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { toast } from "react-toastify";
import ReactResponsiveTable from "../../../components/super-responsive-table";
import createExcerpt from "../../../util/basic";
import Axios from "../../../config/axiosInstance";

const baseURL = "https://example.com"; // replace with actual base URL if needed

const AllBlogs = () => {
  const [blogsData, setBlogsData] = useState({
    results: [],
    page: 1,
    totalPages: 1,
    limit: 10,
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async (page = 1) => {
    try {
      setLoading(true);
      const response = await Axios.get(`/blogs/get-all-blogs?page=${page}`);
      setBlogsData(response.data);
      setCurrentPage(response.data.page || 1);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      toast.error(err.response?.data?.message || "Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(currentPage);
  }, []); // load first page on mount

  const handleDeleteAction = async (slug) => {
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    try {
      setLoading(true);
      await Axios.delete(`/blogs/delete-blog/${slug}`); // replace with your delete endpoint
      toast.success("Blog deleted successfully.");
      fetchBlogs(currentPage); // refresh current page
    } catch (err) {
      console.error("Error deleting blog:", err);
      toast.error(err.response?.data?.message || "Failed to delete blog.");
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = useCallback(
    debounce((event) => {
      const selectedPage = event.selected + 1;
      fetchBlogs(selectedPage);
    }, 300),
    []
  );

  const { results: allBlogs, totalPages, limit } = blogsData;

  const columns = [
    {
      title: "Title",
      key: "title",
    },
    {
      title: "Image",
      key: "featured_image",
      render: (value) => <img src={baseURL + value.path} alt="Blog" width="50" />,
    },
    {
      title: "Description",
      key: "description",
      render: (value) => createExcerpt(value, 20),
    },
    {
      title: "Status",
      key: "status",
    },
    {
      title: "Actions",
      key: "slug",
      render: (value, row, index) => (
        <>
          <button className="btn ps-0">
            <span>
              <CiEdit />
            </span>
          </button>
          <button className="btn" onClick={() => handleDeleteAction(value)}>
            <span>
              <MdDeleteOutline />
            </span>
          </button>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="pagetitle">
          <h1>All Blogs</h1>
        </div>
        <button className="btn btn-primary">Add New</button>
      </div>

      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card w-100 h-100">
              <div className="card-body pt-4 super-responsive-table">
                <ReactResponsiveTable
                  columns={columns}
                  data={allBlogs}
                  serialize={true}
                  initialCount={limit * (currentPage - 1)}
                />

                {totalPages > 1 && (
                  <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    initialPage={currentPage - 1}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={totalPages}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllBlogs;
