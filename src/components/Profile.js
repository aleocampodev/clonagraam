import { useEffect } from "react";
import { CardHeader } from "reactstrap";
import { useAuth } from "../hooks/UseAuth";

const Profile = () => {
  const { userAuth } = useAuth();

  return (
    <CardHeader className="w-100 d-flex">
      <div>
        <form>
          <label htmlFor="file">
            <img
              src={userAuth.photoUrl}
              alt="profile image"
              className="rounded-circle size-image-lg ms-5"
            />
          </label>
          <input type="file" className="d-none" id="file" />
        </form>
      </div>
      <h4>{userAuth.userName}</h4>
    </CardHeader>
  );
};

export default Profile;
