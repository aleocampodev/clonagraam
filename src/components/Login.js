import React, { useState } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";
import { useAuth } from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setUserLogin({ ...userLogin, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(userLogin.email, userLogin.password);

      navigate("/feed");
      e.target.reset();
    } catch (error) {
      console.log(error.code, "holi");
      if (error.code === "auth/wrong-password") {
        setPassword("Password invalid");
      }
      if (error.code === "auth/internal-error") {
        setError("invalid email");
      }

      if (error.code === "auth/user-not-found") {
        setError("user not found");
      }
    }
  };

  return (
    <>
      <Form className="mt-3 " onSubmit={handleLogin}>
        {password && (
          <p className="text-danger position-absolute mt-5 text-lg-start bottom">
            {password}
          </p>
        )}
        {error && (
          <p className="text-danger position-absolute mt-5 text-lg-start">
            {error}
          </p>
        )}
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
