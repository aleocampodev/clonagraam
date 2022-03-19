import React, { useEffect} from "react";
import { useAuth } from "../hooks/UseAuth";

import { auth } from "../Firebase";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const { } = useContext(AuthContext);
  const navigate = useNavigate;
 
  

  useEffect(() => {
    let interval = null;
    if (time !== 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else if (time === 0) {
      setTime(60);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time]);*/

/*const resendEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("hola");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="center">
      <div className="verifyEmail">
        <h1>Verify your Email Address</h1>
        <p>
          <strong>A Verification email has been sent to:</strong>
          <br />
          <span>{currentUser?.email}</span>
        </p>
        <span>Follow the instruction in the email to verify your account</span>
        <button onClick={resendEmailVerification}>Resend Email {time}</button>
      </div>
    </div>
  );
};

export default VerifyEmail;*/
