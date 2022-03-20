import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useAuth } from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(userLogin.email, userLogin.password);
      navigate("/feed");
    } catch (err) {
      setError(err.message);
    }
    e.target.reset();
  };
  return (
    <>
      <Form className="mt-3 " onSubmit={handleLogin}>
        <FormGroup>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            className="w-50 form-input"
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup className="w-80">
          <Input
            id="examplePassword"
            name="password"
            placeholder="password"
            type="password"
            className="w-50 form-input"
            onChange={handleChange}
          />
        </FormGroup>

        <div className="form-input w-100 d-flex justify-content-center">
          <Button className="bg-primary border-0 w-50">Log In</Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
