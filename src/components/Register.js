import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [step, setStep] = useState("register"); // Tracks current step: "register" or "otp"
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(""); // State for OTP input
  const [resendCountdown, setResendCountdown] = useState(30); // Countdown for resend OTP
  const navigate = useNavigate();

  // Handle user registration
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vvbackend.onrender.com/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const result = await response.json();

      if (response.ok) {
        setStep("otp"); // Move to OTP step
        alert("Registration successful. Please verify OTP sent to your email.");
        startResendCountdown(); // Start resend OTP countdown
      } else {
        alert(result.message || "An error occurred during signup.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  // Handle OTP verification
  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://vvbackend.onrender.com/auth/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("OTP verified successfully.");
        navigate("/signin");
      } else {
        alert(result.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  // Handle resend OTP
  const handleResendOtp = async () => {
    try {
      const response = await fetch("https://vvbackend.onrender.com/auth/resend-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("OTP has been resent to your email.");
        startResendCountdown();
      } else {
        alert(result.message || "Failed to resend OTP.");
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  // Resend countdown logic
  const startResendCountdown = () => {
    let timeLeft = 30;
    setResendCountdown(timeLeft);
    const timer = setInterval(() => {
      timeLeft -= 1;
      setResendCountdown(timeLeft);
      if (timeLeft <= 0) clearInterval(timer);
    }, 1000);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-indigo-600 to-indigo-900 items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        {step === "register" ? (
          <>
          <div className="flex flex-col items-center mb-8">
          <img alt="Logo" src="/logo.png" className="h-12 w-auto mb-4"/>
            <h2 className="text-3xl font-bold text-gray-800">Sign up to your account</h2>
            <p className="text-gray-500 mb-6">
              Already a member?{" "}
              <a href="/signin" className="text-indigo-600 hover:text-indigo-500 font-medium">
                Sign In
              </a>
            </p>
            </div>
            <form onSubmit={handleRegister} className="space-y-2">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  required
                  className="mt-2 w-full px-4 py-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  autoComplete="email"
                  className="mt-2 w-full px-4 py-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  required
                  className="mt-2 w-full px-4 py-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Sign Up
              </button>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">Verify OTP</h2>
            <form onSubmit={handleVerifyOtp} className="space-y-6">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Enter OTP
                </label>
                <input
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  type="text"
                  required
                  className="mt-2 w-full px-4 py-2 p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
              >
                Verify OTP
              </button>
              <button
                type="button"
                onClick={handleResendOtp}
                disabled={resendCountdown > 0}
                className={`w-full mt-4 py-2 text-white font-semibold rounded-lg ${resendCountdown > 0 ? "bg-gray-400" : "bg-green-600"} hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600`}
              >
                Resend OTP ({resendCountdown}s)
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
