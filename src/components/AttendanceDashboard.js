import React, { useState, useEffect } from 'react';

const AttendanceDashboard = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await fetch('https://vvbackend.onrender.com/auth/attendance', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setAttendanceRecords(data.attendanceRecords);
          setSessions(data.sessions);  // Now we have both sessions and attendance data
        } else {
          setError('Failed to fetch attendance data.');
        }
      } catch (error) {
        setError('Error fetching attendance data.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  const getAttendanceStatus = (sessionId) => {
    const attendance = attendanceRecords.find(
      (attendance) => attendance.classId._id === sessionId
    );
    return attendance ? attendance.status : 'Absent';
  };

  const filterSessionsUpToToday = (sessions) => {
    const today = new Date().setHours(0, 0, 0, 0); // Set today to midnight to compare dates correctly
    return sessions.filter((session) => new Date(session.date).setHours(0, 0, 0, 0) <= today);
  };

  if (loading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  // Filter sessions to only include those up until today
  const filteredSessions = filterSessionsUpToToday(sessions);

  // If no attendance records and no sessions, display error message
  if (!attendanceRecords.length && filteredSessions.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <div className="bg-red-100 border border-red-500 text-red-700 p-6 rounded-md">
          <p className="text-lg font-semibold">No Attendance Records Found!</p>
          <p>Please check back later or contact support if this issue persists.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Attendance Dashboard</h2>
      
      {/* Dashboard Card */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        
        {/* Table Header */}
        <div className="px-6 py-4 bg-green-600 text-white text-lg font-semibold">
          <span>Class Attendance</span>
        </div>

        {/* Table */}
        <div className="overflow-x-auto p-6">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="text-sm text-gray-700 uppercase bg-indigo-50">
              <tr>
                <th className="px-6 py-4 text-left">Class Title</th>
                <th className="px-6 py-4 text-left">Status</th>
                <th className="px-6 py-4 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredSessions.map((session) => {
                const status = getAttendanceStatus(session._id);
                return (
                  <tr key={session._id} className="border-t hover:bg-indigo-50">
                    <td className="px-6 py-4 text-sm text-gray-700">{session.title}</td>
                    <td
                      className={`px-6 py-4 text-sm text-white rounded-md ${
                        status === 'Present' ? 'bg-green-500' : 'bg-red-500'
                      }`}
                    >
                      {status}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700">
                      {new Date(session.date).toLocaleDateString()}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* No records found message */}
      {filteredSessions.length === 0 && (
        <div className="text-center text-gray-500 mt-4">
          No attendance records available for the selected sessions.
        </div>
      )}
    </div>
  );
};

export default AttendanceDashboard;
