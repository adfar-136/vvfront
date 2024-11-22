import React, { createContext, useContext, useEffect, useState } from 'react';

// Create Context
const AuthContext = createContext();

// Provider Component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userDetails, setUserDetails] = useState(null);

  // Function to fetch user details
  const fetchUserDetails = async () => {
    try {
      const response = await fetch('http://localhost:3000/auth', {
        method: 'GET',
        credentials: 'include', // Ensures cookies are sent
      });
  
      if (response.ok) {
        const data = await response.json();
        if (data.status === true && data.user) {
          setIsAuthenticated(true);
          setUserDetails(data.user);
        } else {
          setIsAuthenticated(false);
          setUserDetails(null);
        }
      } else {
        setIsAuthenticated(false);
        setUserDetails(null);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      setIsAuthenticated(false);
      setUserDetails(null);
    }
  };
  
console.log(isAuthenticated)



const logout = async () => {
  try {
    console.log("dsd")
    const response = await fetch('http://localhost:3000/auth/logout', {
      method: 'POST',
      credentials: 'include', // Ensures the token cookie is cleared
    });

    if (response.ok) {
      setIsAuthenticated(false); // Update the auth state
      setUserDetails(null);      // Clear user details
      console.log('Logged out successfully!');
    } else {
      console.error('Logout failed.');
    }
  } catch (error) {
    console.error('Error during logout:', error);
  }
};

  // Fetch user details on initial mount
  useEffect(() => {
    fetchUserDetails();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        userDetails,
        fetchUserDetails,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
