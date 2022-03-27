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

import { setDoc, getDoc, doc } from "firebase/firestore";

export const AuthProvider = ({ children }) => {
  const [userAuth, setUserAuth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeActive, setTimeActive] = useState(false);
  const [loader, setLoader] = useState(true);

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

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
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

  /*const create = (data) => {
    const { description, image } = data;
    const upload = ref(storage, `images/${image.name}`);
    const uploadPost = uploadBytes(upload, image);

    uploadPost.on(
      "state_changed",
      (snapshot) => {
        let progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        console.log(progress, "hola progreso");
      },
      (err) => {
        console.log(err);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            db.collection("posts").set(`${userAuth.uid}`, {
              description: description,
              image: url,
            });
          });
      }
    );
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
          setLoader(false);
          console.log(userData, "hola data");
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
        loader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
