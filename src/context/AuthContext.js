import { useState, useEffect } from "react";
import { AuthContext } from "../hooks/UseAuth";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeActive, setTimeActive] = useState(false);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
    console.log(auth.currentUser);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => signOut(auth);

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserAuth(currentUser);
      console.log(currentUser);
      setLoading(false);
    });
    return () => onSubscribe;
  }, []);
  return (
    <AuthContext.Provider
      value={{
        signUp,
        login,
        userAuth,
        logOut,
        loading,
        verifyEmail,
        setTimeActive,
        timeActive,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
