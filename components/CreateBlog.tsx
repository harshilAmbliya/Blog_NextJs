"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const BlogAddPage: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
    slug: "",
    content: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await axios.post("/api/blog/create",formData);
    if (response.status === 201) {
      router.push("/allblogs")
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen w-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-5/6">
        <h2 className="text-2xl font-semibold mb-4">Add a New Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block text-gray-700 font-bold">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              name="image"
              value={formData.image}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="slug" className="block text-gray-700 font-bold">
              Slug
            </label>
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-blue-500 overflow-y-auto"
              rows={5}
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Blog Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogAddPage;
