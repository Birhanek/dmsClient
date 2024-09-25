import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  return (
    <div className="mt-1">
      Welcome to the theater of dreams
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Home;
