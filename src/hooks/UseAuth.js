import React, { createContext, useContext } from "react";

export const AuthContext = createContext();

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
