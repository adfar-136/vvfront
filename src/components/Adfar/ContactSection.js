import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(""); // Reset status message

    try {
      const response = await fetch(
        "http://localhost:3000/auth/servicecontact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setStatus("Your request has been submitted successfully! We will get in touch with you very soon!");
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setStatus(result.error || "Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Server error, please try again later.");
    }
  };

  return (
    <div id="contact" className="text-white py-20 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold mb-4">About VariableVerse</h2>
          <p className="text-lg">
            VariableVerse is your go-to platform for mastering technologies like
            MERN, Data Science, App Development, and more.
          </p>
          <button
            onClick={() => (window.location.href = "/")}
            className="mt-4 bg-white text-indigo-600 py-3 px-6 rounded-lg font-medium hover:bg-indigo-100 transition"
          >
            Explore VariableVerse
          </button>
        </div>

        {/* Right Section */}
        <div className="text-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-extrabold text-center mb-6">
            Contact Us
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 p-2 text-gray-900 rounded-lg border-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-900 mt-1 p-2 rounded-lg border-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>
            <div>
              <label htmlFor="service" className="block text-sm font-medium">
                What kind of service do you want?
              </label>
              <select
                id="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded-lg border-2 border-gray-100 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                <option value="">Select a service</option>
                <option value="Personalized Mentorship">
                  Personalized Mentorship
                </option>
                <option value="Custom Website Development">
                  Custom Website Development
                </option>
                <option value="Brand Strategy & Development">
                  Brand Strategy & Development
                </option>
                <option value="Expert Interview Preparation">
                  Expert Interview Preparation
                </option>
                <option value="Interactive Live Classes">
                  Interactive Live Classes
                </option>
                <option value="Tailored Solutions (Custom Requests)">
                  Tailored Solutions (Custom Requests)
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full text-gray-900 mt-1 p-2 rounded-lg border-2 border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-sm">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
