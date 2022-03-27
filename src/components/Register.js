import React, { useState } from "react";
import { auth } from "../Firebase";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";
import "../styles/_main.scss";

import { Card, Form, FormGroup, Input, Button, Label } from "reactstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validatePassword = () => {
    let isValidPassword = true;
    if (password !== "" && confirmPassword !== "") {
      if (password != confirmPassword) {
        isValidPassword = false;
        setError("Password invalid");
      }
    }
    return isValidPassword;
  };

  const authRegister = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          console.log(res.user);
        })
        .catch((err) => setError(err.message));
    }
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="bg-first d-flex flex-column w-100  align-items-center vh-100 ">
      <Card className="w-25">
        <section>
          <h2 className="title-card mt-3">Clonagraam</h2>
          <p>Sign up to see photos and videos from your friends.</p>
        </section>

        <Form className="h-50">
          <FormGroup>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="fullName"
              name="full-name"
              placeholder="Full Name"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="userName"
              name="user-name"
              placeholder="Username"
              type="text"
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password "
              type="password"
            />
          </FormGroup>

          <Button>Sign Up</Button>
        </Form>
      </Card>
      <Card className="w-25 mt-3">
        <h1>hola</h1>
      </Card>
    </div>
  );
};

export default Register;
