import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>Profile</div>;
};

export default Profile;
