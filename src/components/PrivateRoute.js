import React from "react";
import { useAuth } from "../hooks/UseAuth";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }) => {
  const { userAuth, loading } = useAuth();

  if (loading) return <h1>loading</h1>;

  if (!userAuth) return <Navigate to="/" />;

  return <>{children}</>;
};

export default PrivateRouter;
