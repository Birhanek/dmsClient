import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DiagonalCutImage from "../helper/DiagonalCut";
import manOnComputer from "../assets/man-on-computer.jpg";
import ConsultancySteps from "../components/ConsultancySteps";

const Home = () => {
  return (
    <div className=" relative z-40">
      <DiagonalCutImage
        src={`${process.env.PUBLIC_URL}/overseas-education-consultants-hyderabad.webp`}
        alt="oversea education consultancy"
      />
      <article className="absolute top-4 right-4 bg-white p-4 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold">Education Built to Perfection</h2>
        <p className="mt-2 text-gray-600">
          Allow our professional team to help you <br /> choose the right course
          and make the most of your future studies.
        </p>
        <button className="mt-4 bg-purple-700 text-white py-2 px-4 rounded hover:bg-red-600">
          Contact Us
        </button>
      </article>
      {/* This is the main part of the system */}
      <div className=" flex flex-col md:flex-row lg:flex-row xl:flex-row mt-2 gap-2 p-6">
        <article className="rounded">
          <h1 className=" font-bold py-4">
            Creating Successful Students Since 2019
          </h1>
          <p className=" font-sans">
            SayGon Education Consultancy is a leading education consultancy
            based in Ethiopia. Every year we support and advise over 100
            families across the Ethiopia and around the world to gain access to
            US, Canada, UK, EU, Asia schools and Universities. Our team will
            look after the entire application process and will advise families
            accordingly on every step of the admissions process. <br />
            <br />
            We take a bespoke approach through consultation assessment to
            understand student needs. Whether you are looking to find the
            perfect school or university, pass an exam or prepare for an
            interview we can help. Our consultants are committed to unlocking
            student’s potential and helping parents understand differences that.
          </p>
        </article>
        <img className=" rounded" src={manOnComputer} alt="man on a computer" />
      </div>

      {/* consultancy steps */}
      <ConsultancySteps />
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Home;
