import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState<string>("");

  const selectOptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
    navigate(selectedOption);
  };

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold">Dream dMs</div>

        {/* Navigation Links */}
        <select
          name="role"
          value={selectedOption}
          onChange={selectOptionChange}
          required
          className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
          <option value="/login">SignIn</option>
          <option value="/signup">SignUp</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
