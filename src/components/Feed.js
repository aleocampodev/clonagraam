import { Button } from "reactstrap";
import React from "react";
import { useAuth } from "../hooks/UseAuth";
import { useNavigate, Link } from "react-router-dom";
import iconPlus from "../assets/plus.png";

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
    <>
      <p>{userAuth.email}</p>
      <p>{userAuth.userName}</p>

      <Link to="/profile" className="d-flex cursor-pointer">
        <img src={iconPlus} alt="Create post" className="iconPlus" />
        <p>Create Post</p>
      </Link>
      <Button onClick={handleLogOut}>Log out</Button>
    </>
  );
};

export default Feed;
