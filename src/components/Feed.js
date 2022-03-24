import { Button } from "reactstrap";
import React from "react";
import { useAuth } from "../hooks/UseAuth";
import { useNavigate, Link } from "react-router-dom";
import { CardHeader } from "reactstrap";
import imageDefault from "../assets/imageDefault.jpeg";
import "../styles/_main.scss";
import Posts from "./Posts";
import Lens from "../assets/lens.png";
import CreatePost from "./CreatePost";

const Feed = () => {
  const { userAuth, logOut, loading } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    await logOut();
    navigate("/");
  };

  if (loading) {
    return <h1>loading</h1>;
  }
  console.log(userAuth, "hola feed");
  return (
    <div className="bg-first vh-100">
      <CardHeader className="bg-white border-0 d-flex w-100">
        <h2 className="title-card margin-title font-size-app  margin-left flex-fill">
          Clonagraam
        </h2>

        <div className="flex-grow-1 m-auto rounded bg-first size-input m-5">
          <img src={Lens} className="size-lens m-3" />
          <input
            type="search"
            placeholder="Search"
            className="border-0 bg-transparent"
          />
        </div>
        <div className="d-flex h-100 flex-fill m-auto mx-3">
          <CreatePost />
          <Link to="/profile">
            <img
              src={userAuth.photoUrl}
              alt="profile image"
              className="rounded-circle size-image ms-5"
            />
          </Link>
          <Button
            onClick={handleLogOut}
            className="bg-primary border-0 h-25 ms-5"
          >
            Log out
          </Button>
        </div>
      </CardHeader>
      <div className="mh-100 bg-first w-50 margin-left position: relative  overflow-y: scroll mt-3 d-flex">
        <Posts />
        <div className="d-flex">
          <img
            src={userAuth.photoUrl}
            alt="profile image"
            className="rounded-circle size-image ms-5"
          />
          <p className="ms-5">{userAuth.userName}</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
