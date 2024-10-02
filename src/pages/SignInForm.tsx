import React, { useState } from "react";
import SignupFormData from "../components/dataInterface";
import { toast } from "react-toastify";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import RectangularCut from "../helper/RectangularCut";
import goodConsultation from "../assets/good-consultation.jpeg";

const SignInForm: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
  });

  const [errors, setErrors] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validatePasswords = (): boolean => {
    if (formData.password !== formData.confirmPassword) {
      setErrors("Passwords do not match");
      return false;
    }
    setErrors("");
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validatePasswords()) {
      // Process signup logic here
      //   console.log("Signup successful:", formData);
      try {
        const response = await axios.post(
          "http://127.0.0.1:5000/signup",
          formData
        );
        console.log(response);
        if (response.data.ok) {
          setMessage(response.data.message); // display success massage
          toast.success(message);
          navigate("/login");
        } else {
          setMessage(response.data.error);
          toast.error(response.data.error);
        }
      } catch (error) {
        setErrors("Failed to sign up. Try again later.");
        console.error("Error signing up:", error);
      }
    }
  };
  return (
    <section
      className="flex flex-col justify-center md:flex-row xl:flex-row lg:flex-row"
      style={{
        backgroundImage: `url(${goodConsultation})`,
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-lg w-full mx-auto mt-1 mb-1 p-8 bg-white rounded shadow-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
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
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Role:
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Select a role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {errors && <p className="text-red-500 mb-4">{errors}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded hover:bg-blue-600 transition duration-300"
        >
          Sign Up
        </button>
      </form>
    </section>
  );
};

export default SignInForm;
