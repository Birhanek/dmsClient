import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import LoginForm from "./pages/LoginForm";
import SignInForm from "./pages/SignInForm";
import Profile from "./pages/Profile";
import { AuthProvider } from "./components/hooks/hooks";
import ProtectedRoute from "./components/authentication/protectedRoute";
import Logout from "./pages/Logout";

function App() {
  return (
    <div className=" bg-slate-100">
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignInForm />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
        <Home />
      </AuthProvider>
    </div>
  );
}

export default App;
