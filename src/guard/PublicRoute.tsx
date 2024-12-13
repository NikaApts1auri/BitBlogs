import {
  Outlet,
  Navigate,
} from "react-router-dom";

export const PublicRoute: React.FC = () => {
  // თქვენი ლოგიკა
  const isAuthenticated = false; // შეცვალეთ თქვენი ავტორიზაციის ლოგიკით
  return isAuthenticated ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};

export const ProtectedRoute: React.FC = () => {
  // თქვენი ლოგიკა
  const isAuthenticated = true; // შეცვალეთ თქვენი ავტორიზაციის ლოგიკით
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="authorization" />
  );
};
