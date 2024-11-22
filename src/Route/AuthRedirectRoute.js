import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const AuthRedirect = ({ children }) => {
  const { isAuthenticated } = useAuth()

  // Redirect to /profile if the user is already authenticated
  return isAuthenticated ? <Navigate to="/profile" /> : children;
};

export default AuthRedirect;
