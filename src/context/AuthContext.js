import { useState, useEffect } from "react";
import { AuthContext } from "../hooks/UseAuth";
import { auth, db } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  FacebookAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { setDoc, addDoc, collection, getDoc, doc } from "firebase/firestore";

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeActive, setTimeActive] = useState(false);

  const signUp = async (email, password, fullName, userName) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    const docuRef = await addDoc(collection(db, `users`), {
      email,
      fullName,
      userName,
    });
  };

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
  };

  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithFacebook = () => {
    const facebookProvider = new FacebookAuthProvider();
    return signInWithPopup(auth, facebookProvider);
  };

  const logOut = () => signOut(auth);

  const getInfoUser = async (uid) => {
    const docuRef = doc(db, `users`, uid);
    const docSnap = await getDoc(docuRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.log("note doesnit exits");
    }
  };

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        console.log(currentUser.uid, "hola uid");
        /*const userData = {
            uid: currentUser.uid,
            email: currentUser.email,
            fullName: fullName,
            userName: userName,
          };*/
        console.log;
        setUserAuth(userData);
        setLoading(false);
        console.log("usedagt", userData);

        setLoading(true);
      } else {
        setUserAuth(null);
      }

      console.log(currentUser);
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
        loginWithFacebook,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
