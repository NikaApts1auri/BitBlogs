import React, {
  useEffect,
  useState,
} from "react";
import {
  Navigate,
  Outlet,
} from "react-router-dom";

const ProtectedRoute: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] =
    useState<boolean | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem(
      "sb-mcsysflgmwwzwpxulqlk-auth-token"
    );
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const token = parsedData.access_token;
      setIsAuthenticated(!!token);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/authorization" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
