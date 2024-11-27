import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthProvider';

const Profile = () => {
  const { isAuthenticated } = useAuth();
  const [editable, setEditable] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [updatedUserDetails, setUpdatedUserDetails] = useState({});
  
  const [batches, setBatches] = useState([]); // State to store batches

  useEffect(() => {
    if (isAuthenticated) {
      const fetchUserDetails = async () => {
        try {
          const response = await fetch('https://vvbackend.onrender.com/auth/getProfile', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

          if (response.ok) {
            const data = await response.json();
            const formattedUser = {
              ...data.user,
              dob: data.user.dob ? new Date(data.user.dob).toISOString().split('T')[0] : '',
            };

            setUserDetails(formattedUser);
            setUpdatedUserDetails(formattedUser);
          } else {
            console.error('Failed to fetch user details');
          }
        } catch (error) {
          console.error('Error fetching user details:', error);
        }
      };

      const fetchBatches = async () => {
        try {
          const response = await fetch('https://vvbackend.onrender.com/auth/batches', { // Assuming endpoint to get predefined batches
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
          });

          if (response.ok) {
            const data = await response.json();
            setBatches(data); // Set batches to state
          } else {
            console.error('Failed to fetch batches');
          }
        } catch (error) {
          console.error('Error fetching batches:', error);
        }
      };

      fetchUserDetails();
      fetchBatches();
    }
  }, [isAuthenticated]);

  const handleChange = (e) => {
    setUpdatedUserDetails({
      ...updatedUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a plain object with updated user details
    const updatedData = { ...updatedUserDetails };

    try {
      const response = await fetch('https://vvbackend.onrender.com/auth/updateProfile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json', // Make sure to set the header as application/json
        },
        body: JSON.stringify(updatedData), // Convert object to JSON string
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        setUserDetails(updatedUserDetails);
        setEditable(false);
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
          <p className="text-xl font-semibold text-gray-800 mb-4">Please sign in to view your profile.</p>
          <button
            onClick={() => window.location.href = '/signin'} // replace with your actual sign-in route
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            Sign In
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
     
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Profile</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            Manage your profile information here.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="px-4 py-5 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Username', value: userDetails.username, name: 'username', disabled: true },
                { label: 'Email', value: userDetails.email, name: 'email', disabled: true },
                { label: 'Gender', value: updatedUserDetails.gender, name: 'gender', disabled: !editable },
                { label: 'Date of Birth', value: updatedUserDetails.dob, name: 'dob', disabled: !editable, type: 'date' },
                { label: 'Education', value: updatedUserDetails.education, name: 'education', disabled: !editable },
                { label: 'Skills', value: updatedUserDetails.skills, name: 'skills', disabled: !editable },
                { label: 'Phone Number', value: updatedUserDetails.phone, name: 'phone', disabled: !editable },
                { label: 'About You', value: updatedUserDetails.about, name: 'about', disabled: !editable, type: 'textarea' },
                { label: 'Technology of Interest', value: updatedUserDetails.interest, name: 'interest', disabled: !editable },
                {
                  label: 'Current Batch',
                  name: 'currentBatch',
                  disabled: !editable,
                  value: updatedUserDetails.currentBatch || '',
                  isSelect: true,
                },
              ].map((field, index) => (
                <div key={index}>
                  <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  {field.isSelect ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={field.value}
                      onChange={handleChange}
                      disabled={field.disabled}
                      className="mt-1 block w-full sm:max-w-xs py-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    >
                      <option value="">Select Batch</option>
                      {batches.map((batch) => (
                        <option key={batch._id} value={batch._id}>
                          {batch.name}
                        </option>
                      ))}
                    </select>
                  ) : field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={field.value || ''}
                      onChange={handleChange}
                      disabled={field.disabled}
                      className="mt-1 block w-full sm:max-w-xs p-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    />
                  ) : (
                    <input
                      type={field.type || 'text'}
                      id={field.name}
                      name={field.name}
                      value={field.value || ''}
                      onChange={handleChange}
                      disabled={field.disabled}
                      className={`mt-1 block w-full sm:max-w-xs shadow-sm focus:ring-indigo-500 p-4 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md ${
                        field.disabled ? 'bg-gray-100' : ''
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="px-4 py-3 sm:px-6">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setEditable(!editable)}
                className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
              >
                {editable ? 'Cancel' : 'Edit'}
              </button>
              <button
                type="submit"
                disabled={!editable}
                className={`ml-3 inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 ${
                  !editable ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
