import { useState, useEffect } from "react";
import { useAuth } from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [time, setTime] = useState(60);
  const { userAuth, verifyEmail, setTimeActive, timeActive } = useAuth();
  const navigate = useNavigate();

  /*useEffect(() => {
    const interval = setInterval(() => {
      userAuth
        ?.reload()
        .then(() => {
          if (userAuth?.emailVerified) {
            clearInterval(interval);
            navigate("/");
          }
        })
        .catch((err) => console.log(err.message));
    }, 1000);
  }, [navigate, userAuth]);*/

  /*useEffect(() => {
    let interval = null;
    if (timeActive && time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTimeActive(false);
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timeActive, time, setTimeActive]);*/

  const resendEmailVerification = async () => {
    try {
      await verifyEmail();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <p>Verifica email</p>
      <button onClick={resendEmailVerification}></button>
    </>
  );
};

export default VerifyEmail;
