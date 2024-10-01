import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>We are in the profile page</div>;
};

export default Profile;
