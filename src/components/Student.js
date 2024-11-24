import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthProvider';
import AttendanceDashboard from './AttendanceDashboard';

const Student = () => {
  const { isAuthenticated, userDetails } = useAuth();
  const [batch, setBatch] = useState(null);
  const [classes, setClasses] = useState([]);
  const [attending, setAttending] = useState(false);
  
  useEffect(() => {
    if (isAuthenticated) {
      // Fetch the current student's batch details
      const fetchBatchDetails = async () => {
        console.log(userDetails)
        try {
          const response = await fetch(`https://vvbackend.onrender.com/auth/batches/${userDetails.currentBatch}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

          if (response.ok) {
            const batchData = await response.json();
            console.log(batchData)
            setBatch(batchData);
          } else {
            console.error('Failed to fetch batch details');
          }
        } catch (error) {
          console.error('Error fetching batch details:', error);
        }
      };

      // Fetch the classes for this week
      const fetchClassesForThisWeek = async () => {
        try {
          const response = await fetch('https://vvbackend.onrender.com/auth/classes/this-week', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setClasses(data);
          } else {
            console.error('Failed to fetch classes');
          }
        } catch (error) {
          console.error('Error fetching classes:', error);
        }
      };

      fetchBatchDetails();
      fetchClassesForThisWeek();
    }
  }, [isAuthenticated, userDetails]);

  const handleJoinClass = async (classId, joinLink) => {
    try {
      const response = await fetch("https://vvbackend.onrender.com/auth/mark-attendance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ classId }),
      });

      if (response.ok) {
        window.open(joinLink, "_blank"); // Redirect to class link
      } else {
        console.error("Failed to mark attendance");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-100 to-blue-200">
        <div className="text-center bg-white p-8 rounded-lg shadow-xl max-w-sm w-full">
          <p className="text-xl font-semibold text-gray-800 mb-4">Please sign in to view your profile.</p>
          <button
            onClick={() => window.location.href = '/signin'}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Page Introduction */}
      <div className="flex items-center justify-between mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
  {/* Left Section: Welcome Message */}
  <div>
    <h2 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h2>
    <p className="text-sm text-gray-600 mt-1">
      Stay on top of your learning with upcoming classes, attendance tracking, and live sessions.
    </p>
  </div>

  {/* Right Section: Start a Discussion Button */}
  <button
    onClick={() => window.location.href = '/discussion'}
    className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
    Start a Discussion
  </button>
</div>

   
      {/* Batch Info Section */}
      {batch && (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-xl mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Your Current Batch: {batch.name}</h3>
          <p className="text-gray-700 mt-2">Batch Start Date: {new Date(batch.startDate).toLocaleDateString()}</p>
          <p className="text-gray-700 mt-1">Batch Description: {batch.description}</p>
        </div>
      )}

      {/* Upcoming Classes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {classes.map((classItem) => {
          const classTime = new Date(classItem.date).getTime(); // Convert class date to timestamp
          const currentTime = new Date().getTime(); // Get current timestamp
          const timeDifference = classTime - currentTime; // Difference in milliseconds
          const isButtonEnabled = timeDifference <= 10 * 60 * 1000; 

          return (
            <div key={classItem._id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={classItem.thumbnailUrl || 'https://via.placeholder.com/400x200'}
                alt={classItem.title}
                className="w-full h-40 object-cover transform transition-all duration-500 hover:scale-110"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-800">{classItem.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{classItem.description}</p>

                {/* Display Class Date */}
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Date:</span>{' '}
                  {new Date(classItem.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>

                {/* Display Class Time */}
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Time:</span>{' '}
                  {new Date(classItem.date).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>

                {/* Mark Attendance Button */}
                <button
                  onClick={() => handleJoinClass(classItem._id, classItem.joinLink)}
                  className={`mt-4 w-full py-2 rounded-md text-white ${
                    isButtonEnabled
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  }`}
                  disabled={!isButtonEnabled} // Disable if not within 10 minutes
                >
                  Join Now
                </button>

                {/* Message to indicate when the button will be enabled */}
                {!isButtonEnabled && timeDifference > 0 && (
                  <p className="text-xs text-gray-500 mt-2">
                    The button will be active 10 minutes before the class starts.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <AttendanceDashboard/>
    </div>
  );
};

export default Student;
