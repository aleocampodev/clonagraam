import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/_main.scss";
import { Card, Form, FormGroup, Input, Button } from "reactstrap";
import { useAuth } from "../hooks/UseAuth";
import Facebook from "../assets/icon-facebook.jpeg";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    fullName: "",
    userName: "",
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
      await signUp(user.email, user.password, user.fullName, user.userName);
      navigate("/feed");
    } catch (error) {
      setError(error.message);
      if (error.code === "auth/internal-error") {
        setError("invalid email");
      }
      if (error.code === "auth/email-already-in-use") {
        setError("email exist");
      }
    }
    e.target.reset();
  };

  return (
    <div className="bg-first d-flex flex-column w-100  align-items-center vh-100 ">
      {error && (
        <p className="text-danger position-absolute mt-3 text-lg-start">
          {error}
        </p>
      )}
      <Card className="w-25 pt-3 px-5 mt-5">
        <section>
          <h2 className="title-card margin-title">Clonagraam</h2>
          <p className="text-center text-muted fw-bolder">
            Sign up to see photos and videos from your friends.
          </p>
          <Button className="bg-primary border-0 d-flex w-100 height-box justify-content-center align-items-center">
            <img
              src={Facebook}
              alt="Icono facebook"
              className="facebook-icon text-primary border-0"
            />

            <p className="ms-3 mt-3">Log in with Facebook</p>
          </Button>
          <p className="text-center m-3">OR</p>
        </section>

        <Form className="h-50" onSubmit={handleSubmit}>
          <FormGroup className="margin-bottom">
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="margin-bottom">
            <Input
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              type="text"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="margin-bottom">
            <Input
              id="userName"
              name="userName"
              placeholder="Username"
              type="text"
              onChange={handleChange}
              className="margin-bottom"
            />
          </FormGroup>
          <FormGroup className="margin-bottom">
            <Input
              id="examplePassword"
              name="password"
              placeholder="Password "
              type="password"
              onChange={handleChange}
              className="margin-bottom"
            />
          </FormGroup>

          <Button className="bg-primary w-100 border-0">Sign up</Button>
          <p className="text-center mt-3 text-xl-paragraph text-muted">
            By signing up, you agree to our Terms, Data Policy and Cookies
            Policy
          </p>
        </Form>
      </Card>
      <Card className="w-25 mt-2 d-flex flex-row justify-content-center p-2">
        <p className="mt-2">Have an account? </p>
        <Link to="/" className="ms-3 mt-2 text-decoration-none">
          <p>Log in</p>
        </Link>
      </Card>
      <section className=" mt-3">
        <p className="text-center">Get the app.</p>
        <div className="d-flex w-100 justify-content-center">
          <img src={googlePlay} alt="image google play" className="width-xl " />
          <img src={appStore} alt="image app store" className="width-xl ms-3" />
        </div>
      </section>
    </div>
  );
};

export default Register;
