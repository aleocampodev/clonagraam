import React, { useState } from "react";
import googlePlay from "../assets/googlePlay.png";
import appStore from "../assets/appStore.png";
import { Card, Form } from "reactstrap";
import { auth } from "../Firebase";
import { Link, Navigate } from "react-router-dom";
import facebook from "../assets/facebook.png";
import Login from "../components/Login";

import "../styles/_main.scss";

const CardBox = () => {
  return (
    <div className="mt-lg-5 ms-lg-5 ">
      <Card className="margin-right">
        <h2 className="title-card mt-3">Clonagraam</h2>

        <Login />
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
      </Card>

      <Card className="margin-right mt-3 d-flex flex-row justify-content-center p-3 ">
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
    </div>
  );
};

export default CardBox;
