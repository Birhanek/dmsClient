import React, { ChangeEvent, FormEvent, useState } from "react";
import { LoginFormData } from "../components/dataInterface";
import { toast } from "react-toastify";
import axios from "axios";
import { NavLink } from "react-router-dom";
import GoogleAuth from "../components/authentication/GoogleAuth";

const LoginForm = () => {
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/login",
        loginData
      );
      console.log(response);
      if (response.data.ok) {
        setMessage(response.data.message);
        toast.success(message);
      } else {
        setMessage(response.data.error);
        toast.error(message);
      }
    } catch (error) {
      setErrors("Failed to sign up. Try again later.");
      console.error("Error signing up:", error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-8 bg-white rounded shadow-md my-2"
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
      <GoogleAuth />
      <p className=" italic text-center w-full py-4 text-slate-400">
        ----- or -----
      </p>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={loginData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">
          Password:
        </label>
        <input
          type="password"
          name="password"
          value={loginData.password}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
        {errors && <p className="text-red-500 mb-4">{errors}</p>}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-4 mt-5 rounded hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>

        <p className="border-t border-slate-700 mt-3 italic">
          Don't you have account?{" "}
          <NavLink to="/signup" className="text-blue-800 hover:underline">
            Create Account
          </NavLink>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
