import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthProvider';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth()

  // Redirect to /signin if the user is not authenticated
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default ProtectedRoute;
