import { useState, useEffect } from "react";
import { AuthContext } from "../hooks/UseAuth";
import firebase from "firebase";
import { auth, db, storage } from "../Firebase";
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

  const signUp = async (email, password, fullName, userName, photoUrl) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;

    console.log(user, "hola userop");

    await setDoc(doc(db, `users/${user.uid}`), {
      email,
      fullName,
      userName,
      photoUrl,
    });
  };

  console.log(userAuth.id, "hola usuarioeu");
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

  /*const create = (data, uid) => {
    const { description, image } = data;
    const upload = storage.ref(`images/${image.name}`).put(image);
    upload.on(
      "state_changed",
      (snp) => {
        let progress = (snp.bytesTransferred / snp.totalBytes) * 100;
        console.log(progress, "hola progreso");
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage.ref("images").child(image.name).getDownloadURL().then(url => {
          db.collection("users").doc(`${userAuth.uid}`).update({
            description: description,
            image: url,
            currentTime: firebase.firestore.FieldValue.serverTimestamp()
        })
      })
  };*/

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
            photoUrl: addInfo.photoUrl,
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
        create,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
