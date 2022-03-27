import React, { createContext, useState, useEffect } from "react";
import app from "../Firebase.js";
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
