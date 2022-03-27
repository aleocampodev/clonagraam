import React, { useContext } from "react";
import { Route, useNavigate } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";

const PrivateRouter = ({ component: RouteComponent }) => {
  const { currentUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  return (
    <Route
      render={(routeProps) =>
        !!currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <navigate to={"/"} />
        )
      }
    />
  );
};

export default PrivateRouter;
