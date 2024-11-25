import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthProvider';
import AttendanceDashboard from './AttendanceDashboard';

const Student = () => {
  const { isAuthenticated, userDetails } = useAuth();
  const [batch, setBatch] = useState(null);
  const [classes, setClasses] = useState([]);
  
  useEffect(() => {
    if (isAuthenticated) {
      const fetchBatchDetails = async () => {
        try {
          const response = await fetch(`https://vvbackend.onrender.com/auth/batches/${userDetails.currentBatch}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

          if (response.ok) {
            const batchData = await response.json();
            setBatch(batchData);
          } else {
            console.error('Failed to fetch batch details');
          }
        } catch (error) {
          console.error('Error fetching batch details:', error);
        }
      };

      const fetchClassesForThisWeek = async () => {
        try {
          const response = await fetch('https://vvbackend.onrender.com/auth/classes/this-week', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

          if (response.ok) {
            const data = await response.json();
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
        window.open(joinLink, "_blank");
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
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex flex-wrap items-center justify-between mb-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800">Welcome to Your Dashboard</h2>
          <p className="text-sm text-gray-600 mt-1">
            Stay on top of your learning with upcoming classes, attendance tracking, and live sessions.
          </p>
        </div>
        <div className="flex space-x-4">
          <button
            onClick={() => window.location.href = '/discussion'}
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Start a Discussion
          </button>
          <button
            onClick={() => window.location.href = '/content'}
            className="inline-flex items-center justify-center rounded-md bg-green-600 px-6 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Explore Content
          </button>
        </div>
      </div>

      {batch && (
        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-6 rounded-lg shadow-xl mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Your Current Batch: {batch.name}</h3>
          <p className="text-gray-700 mt-2">Batch Start Date: {new Date(batch.startDate).toLocaleDateString()}</p>
          <p className="text-gray-700 mt-1">Batch Description: {batch.description}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {classes.map((classItem) => {
          const classTime = new Date(classItem.date).getTime();
          const currentTime = new Date().getTime();
          const timeDifference = classTime - currentTime;
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
                <p className="text-sm text-gray-600 mt-1">
                  <span className="font-semibold">Date:</span>{' '}
                  {new Date(classItem.date).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Time:</span>{' '}
                  {new Date(classItem.date).toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </p>
                <button
                  onClick={() => handleJoinClass(classItem._id, classItem.joinLink)}
                  className={`mt-4 w-full py-2 rounded-md text-white ${
                    isButtonEnabled
                      ? 'bg-green-600 hover:bg-indigo-700'
                      : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  }`}
                  disabled={!isButtonEnabled}>
                  Join Now
                </button>
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
      <AttendanceDashboard />
    </div>
  );
};

export default Student;
