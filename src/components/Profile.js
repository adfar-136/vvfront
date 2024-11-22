import React, { useState, useEffect } from 'react';
import { useAuth } from '../Context/AuthProvider';

const Profile = () => {
  const { isAuthenticated } = useAuth();
  const [editable, setEditable] = useState(false);
  const [userDetails, setUserDetails] = useState({});
  const [updatedUserDetails, setUpdatedUserDetails] = useState({});

  useEffect(() => {
    console.log(isAuthenticated)
    // Fetch user details from the API when the component mounts
    const fetchUserDetails = async () => {
      try {
        const response = await fetch('http://localhost:3000/auth/getProfile', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();

          // Format the DOB to `YYYY-MM-DD` for the date input field
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

    fetchUserDetails();
  }, []);

  const handleChange = (e) => {
    setUpdatedUserDetails({
      ...updatedUserDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formattedDetails = {
        ...updatedUserDetails,
        dob: updatedUserDetails.dob || null, // Ensure `dob` is null if not provided
      };

      const response = await fetch('http://localhost:3000/auth/updateProfile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formattedDetails),
        credentials: 'include',
      });

      if (response.ok) {
        console.log('Profile updated successfully');
        setUserDetails(formattedDetails);
        setEditable(false);
      } else {
        console.error('Failed to update profile');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  if (!isAuthenticated) {
    return <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center bg-white p-8 rounded-lg shadow-md max-w-sm w-full">
      <p className="text-xl font-semibold text-gray-800 mb-4">Please sign in to view your profile.</p>
      <button 
        onClick={() => window.location.href = '/signin'} // replace with your actual sign-in route
        className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Sign In
      </button>
    </div>
  </div>
  
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
              ].map((field, index) => (
                <div key={index}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700"
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      value={field.value || ''}
                      onChange={handleChange}
                      disabled={field.disabled}
                      className="mt-1 block w-full sm:max-w-xs shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    />
                  ) : (
                    <input
                      type={field.type || 'text'}
                      id={field.name}
                      name={field.name}
                      value={field.value || ''}
                      onChange={handleChange}
                      disabled={field.disabled}
                      className={`mt-1 block w-full sm:max-w-xs shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md ${
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
                className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
              >
                {editable ? 'Cancel' : 'Edit'}
              </button>
              <button
                type="submit"
                disabled={!editable}
                className={`ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 ${
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
