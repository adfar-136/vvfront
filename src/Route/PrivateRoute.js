import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children, isAuthenticated }) => {
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login, preserving the attempted path
    return <Navigate to="/signin" state={{ from: location }} />;
  }

  return children;
};

export default PrivateRoute;
