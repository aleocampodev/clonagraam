import { Button } from "reactstrap";
import React from "react";
import { useAuth } from "../hooks/UseAuth";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <p>{userAuth.email}</p>
      <Button onClick={handleLogOut}>Log out</Button>
    </>
  );
};

export default Feed;
