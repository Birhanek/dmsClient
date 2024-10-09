import React from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation();
  console.log(location.state);
  return <div className=" ">welcome {location.state.first_name}</div>;
};

export default Profile;
