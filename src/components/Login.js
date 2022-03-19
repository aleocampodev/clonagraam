import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Button } from "reactstrap";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();
    console.log("hola data");
  };
  return (
    <>
      <Form className="mt-3 " onSubmit={login}>
        <FormGroup>
          <Input
            id="exampleEmail"
            name="email"
            placeholder="Email"
            type="email"
            className="w-50 form-input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="w-80">
          <Input
            id="examplePassword"
            name="password"
            placeholder="password"
            type="password"
            className="w-50 form-input"
            onChange={(e) => setPassword(e.target.value)}
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
