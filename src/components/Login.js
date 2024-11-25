import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { fetchUserDetails } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    try {
      const response = await fetch("https://vvbackend.onrender.com/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", 
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (data.status) {
        console.log(data)
        fetchUserDetails();
        navigate("/student");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError("An error occurred while logging in. Please try again.");
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-indigo-600 to-indigo-900 text-white">
        <div className="w-full max-w-md px-6 py-8 bg-white rounded-xl shadow-lg lg:w-96">
          <div className="flex flex-col items-center mb-8">
            <img alt="Logo" src="/logo.png" className="h-12 w-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in to your account</h2>
            <p className="text-sm text-gray-500">
              Not a member?{" "}
              <a
                href="/signup"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Signup
              </a>
            </p>
          </div>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full mt-2 rounded-md border-2 border-gray-300 py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full mt-2 rounded-md border-2 border-gray-300 py-2 px-3 text-gray-700 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-700"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a
                  href="/forgot-password"
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>

        {/* Background Image */}
      </div>
    </>
  );
}
