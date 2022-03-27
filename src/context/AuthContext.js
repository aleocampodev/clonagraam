import { AuthContext } from "../hooks/UseAuth";

export const AuthProvider = ({ children }) => {
  const user = {
    login: true,
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};
