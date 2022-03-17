import React, { useState } from "react";
import { auth } from "./firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useAuthValue } from ".AuthContext";

const Register = () => {
  const [email, setEmail] = useState;
};
