import React, { useState } from "react";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import { Card, Form, FormGroup, Button, Input } from "reactstrap";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import "../styles/_main.scss";

const CardBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Card className="margin-right">
        <h2 className="title-card mt-3">Clonagraam</h2>
        <Form className="mt-3 ">
          <FormGroup>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="Email"
              type="email"
              className="w-50 form-input"
            />
          </FormGroup>
          <FormGroup className="w-80">
            <Input
              id="examplePassword"
              name="password"
              placeholder="password"
              type="password"
              className="w-50 form-input"
            />
          </FormGroup>

          <div className="form-input w-100 d-flex justify-content-center">
            <Button className="bg-primary border-0 w-50">Log In</Button>
          </div>
          <h6 className="text-center m-3">OR</h6>
          <a href="#" className="style-link">
            <div className="d-flex justify-content-center mb-3">
              <img
                src={facebook}
                alt="image facebook "
                className="facebook-icon m-3"
              />
              <p className="m-3 text-icon">Log in with Facebook</p>
            </div>
          </a>

          <section>
            <a href="#" className="text-center mb-5 style-link">
              <p>Forgot password?</p>
            </a>
          </section>
        </Form>
      </Card>

      <Card className="margin-right mt-3 d-flex flex-row justify-content-center p-3">
        <p className="pr-3">Don't have an account? </p>
        <Link to="/register" href="#" className="style-link">
          <p> Sign up</p>
        </Link>
      </Card>

      <section className="margin-right mt-3">
        <p className="text-center">Get the app.</p>
        <div className="d-flex w-100 justify-content-center">
          <img src={googlePlay} alt="image google play" className="width-30" />
          <img src={appStore} alt="image app store" className="width-30" />
        </div>
      </section>
    </>
  );
};

export default CardBox;
