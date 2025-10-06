import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { fetchUser } from "../redux/slices/authSlice.js";

export default function ProtectedRoute() {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    // On initial load, try to fetch user if not in Redux yet
    if (!user && status === "idle") {
      dispatch(fetchUser());
    }
  }, [user, status, dispatch]);

  // Still checking auth
  if (status === "loading") {
    return <div className="text-center mt-5">Loading...</div>;
  }

  // Not authenticated → redirect to login
  if (!user && status === "failed") {
    return <Navigate to="/login" replace />;
  }

  // Authenticated → render children
  return <Outlet />;
}
