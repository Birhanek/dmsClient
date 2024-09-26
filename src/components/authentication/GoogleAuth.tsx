import React, { useState } from "react";
import { signInWithPopup, signOut, User } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

const GoogleAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  const signInWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      setUser(response.user);
      console.log("User", response.user);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error during sign out:", error);
    }
  };
  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <button
          className="flex justify-center items-center text-center border w-full p-3  border-gray-300 rounded hover:border-orange-400 "
          onClick={signInWithGoogle}
        >
          <img
            className="w-5 h-5 center"
            src={`${process.env.PUBLIC_URL}/google-icon.png`}
            alt="google icon"
          />
          <span>Google</span>
        </button>
      )}
    </div>
  );
};

export default GoogleAuth;
