import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Feed from "./components/Feed";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import { AuthProvider } from "./context/AuthContext";
import VerifyEmail from "./components/VerifyEmail";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <Feed />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<App />} />
        <Route path="/register" element={<Register />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,

  document.getElementById("root")
);
