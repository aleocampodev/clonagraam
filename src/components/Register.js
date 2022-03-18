import React, { useContext, useState } from "react";
import { auth, db } from "../Firebase";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/_main.scss";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { Card, Form, FormGroup, Input, Button } from "reactstrap";
import AuthContext from "../contexts/AuthContext";
import { getApp } from "firebase/app";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");
  const { currentUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = async (email, password, FullName, UserName) => {
    console.log("hola", email, password, fullName, userName);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      console.log(user, "hola user");
      /*await addDoc(collection(db, "users"), {
        uid: user.uid,
        fullName,
        userName,
        email,
      });*/
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="bg-first d-flex flex-column w-100  align-items-center vh-100 ">
      <Card className="w-25">
        <section>
          <h2 className="title-card mt-3">Clonagraam</h2>
          <p>Sign up to see photos and videos from your friends.</p>
        </section>

        <Form className="h-50" onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={(ev) => setEmail(ev.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              type="text"
              onChange={(ev) => setFullName(ev.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="userName"
              name="userName"
              placeholder="Username"
              type="text"
              onChange={(ev) => setUserName(ev.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password "
              type="password"
              onChange={(ev) => setPassword(ev.target.value)}
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
