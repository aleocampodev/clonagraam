import React, { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "../styles/_main.scss";
import { Card, Form, FormGroup, Input, Button } from "reactstrap";
import { useAuth } from "../hooks/UseAuth";
import { getApp } from "firebase/app";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(user.email, user.password);
      navigate("/feed");
    } catch (err) {
      setError(err.message);
      if (error.code === "auth/internal-error") {
        setError("correo invalido");
      }
      setError(error.message);
    }
  };

  return (
    <div className="bg-first d-flex flex-column w-100  align-items-center vh-100 ">
      {error && <p>{error}</p>}
      <Card className="w-25">
        <section>
          <h2 className="title-card mt-3">Clonagraam</h2>
          <p>Sign up to see photos and videos from your friends.</p>
        </section>

        <Form className="h-50" onSubmit={handleSubmit}>
          <FormGroup>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password "
              type="password"
              onChange={handleChange}
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
