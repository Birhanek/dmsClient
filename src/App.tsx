import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LoginForm from "./pages/LoginForm";
import SignInForm from "./pages/SignInForm";

function App() {
  return (
    <div className=" bg-slate-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignInForm />} />
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
