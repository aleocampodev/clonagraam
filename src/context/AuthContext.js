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

    console.log(user, "hola userop");

    await setDoc(doc(db, `users/${user.uid}`), {
      email,
      fullName,
      userName,
    });
  };

  console.log(userAuth, "hola usuarioeu");
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
    const docuRef = doc(db, `users/${uid}`);
    const docSnap = await getDoc(docuRef);
    const infoFinal = docSnap.data();
    return infoFinal;
  };

  useEffect(() => {
    const onSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //setUserAuth(currentUser);
      //setLoading(false);
      if (currentUser) {
        getInfoUser(auth.currentUser.uid).then((addInfo) => {
          const userData = {
            uid: currentUser.uid,
            email: currentUser.email,
            fullName: addInfo.fullName,
            userName: addInfo.userName,
          };

          setUserAuth(userData);
          setLoading(false);
        });
      } else {
        setUserAuth(null);
      }
    });

    console.log(userAuth, "hola userioe");
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
        setUserAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
