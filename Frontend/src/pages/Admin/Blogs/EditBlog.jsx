import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "../../../config/axiosInstance";

const EditBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    status: "publish",
    featured_image: null,
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await Axios.get(`/blogs/get-blog-by-slug/${slug}`);
        setFormData({
          title: res.data.title,
          description: res.data.description,
          content: res.data.content,
          status: res.data.status,
          featured_image: null, // file will be uploaded if changed
        });
      } catch (err) {
        toast.error(err.response?.data?.message || "Failed to fetch blog");
      }
    };
    fetchBlog();
  }, [slug]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("content", formData.content);
      data.append("status", formData.status);
      if (formData.featured_image)
        data.append("featured_image", formData.featured_image[0]);

      const res = await Axios.patch(`/blogs/update-blog/${slug}`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message);
      navigate("/dashboard/blogs");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to update blog");
    }
  };

  return (
    <div className="card p-4">
      <h3>Edit Blog</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="form-control mb-2"
        >
          <option value="publish">Publish</option>
          <option value="draft">Draft</option>
        </select>
        <input
          type="file"
          name="featured_image"
          onChange={handleChange}
          className="form-control mb-2"
          accept="image/*"
        />
        <button type="submit" className="btn btn-primary">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
