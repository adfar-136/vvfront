import React, { useState } from 'react';
import { useAuth } from '../Context/AuthProvider'; // Ensure this is properly configured

const AdminSessionManager = () => {
  const { userDetails } = useAuth(); // Assuming you have a context for auth
  const adminEmail = "adfarrasheed136@gmail.com";

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    joinLink: "",
    date: "",
  });

  const [message, setMessage] = useState("");

  if (!userDetails || userDetails.email !== adminEmail) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
          <p className="text-xl font-semibold text-red-600">Access Denied</p>
          <p className="text-gray-700 mt-2">You are not authorized to access this page.</p>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vvbackend.onrender.com/auth/classes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Class added successfully!");
        setFormData({
          title: "",
          description: "",
          thumbnailUrl: "",
          joinLink: "",
          date: "",
        });
      } else {
        setMessage("Failed to add class. Please try again.");
      }
    } catch (error) {
      console.error("Error adding class:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold text-gray-800 text-center">Admin: Add New Class</h2>
      <form onSubmit={handleSubmit} className="mt-6 bg-white shadow-md rounded-lg p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="Class Title"
              required
            />
          </div>
          <div>
            <label htmlFor="thumbnailUrl" className="block text-sm font-medium text-gray-700">
              Thumbnail URL
            </label>
            <input
              type="url"
              id="thumbnailUrl"
              name="thumbnailUrl"
              value={formData.thumbnailUrl}
              onChange={handleInputChange}
              className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://example.com/thumbnail.jpg"
            />
          </div>
          <div>
            <label htmlFor="joinLink" className="block text-sm font-medium text-gray-700">
              Join Link
            </label>
            <input
              type="url"
              id="joinLink"
              name="joinLink"
              value={formData.joinLink}
              onChange={handleInputChange}
              className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              placeholder="https://example.com/join"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              type="datetime-local"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
            className="mt-1 block w-full p-4 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter a brief description"
          ></textarea>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add Class
          </button>
        </div>
        {message && (
          <p className="mt-4 text-center text-sm font-medium text-green-600">{message}</p>
        )}
      </form>
    </div>
  );
};

export default AdminSessionManager;
