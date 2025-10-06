import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Axios from "../../../config/axiosInstance";

const AddBlog = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    status: "publish",
    featured_image: null,
  });

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

      const res = await Axios.post("/blogs/create-blog", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success(res.data.message);
      navigate("/dashboard/blogs");
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to create blog");
    }
  };

  return (
    <div className="card p-4">
      <h3>Add Blog</h3>
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
          required
        />
        <button type="submit" className="btn btn-primary">Add Blog</button>
      </form>
    </div>
  );
};

export default AddBlog;
