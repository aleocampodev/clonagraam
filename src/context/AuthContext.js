import { AuthContext } from "../hooks/UseAuth";
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  return (
    <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
  );
};
