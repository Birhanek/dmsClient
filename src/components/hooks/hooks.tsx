import {
  createContext,
  useState,
  useContext,
  ReactNode,
  FC,
  useEffect,
} from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, googleProvider } from "../firebase";
import { IMessage, IUser, LoginFormData } from "../dataInterface";
import axios from "axios";
import { AuthContextType } from "../dataInterface";

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

// Define a provider component
interface AuthProviderProps {
  children: ReactNode;
}

// AuthProvider component to wrap your app
export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [message, setMessage] = useState<IMessage | undefined>(undefined);
  const [isWithGoogleSignIn, setIsWithGoogleSignIn] = useState<boolean>(false);

  // Watch for changes to `user` and `isAuthenticated` and log the updated values
  useEffect(() => {
    if (user) {
      console.log("User updated:", user);
    }
    if (isAuthenticated) {
      console.log("User is authenticated:", isAuthenticated);
    }
  }, [user, isAuthenticated, isWithGoogleSignIn]);
  // Function to log in
  const login = async (obj: LoginFormData) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", obj, {
        withCredentials: true,
      });

      if (response.data.ok) {
        const data = await response.data.data;
        setUser(data); // Set the user data from the database
        setMessage(response.data.message); // Set the message data from the database
        setIsAuthenticated(true);
        setIsWithGoogleSignIn(false);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
    }
  };

  // Function to log out
  const logout = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/logout", {
        withCredentials: true,
      });
      console.log(response.data.message);

      if (response.data.ok) {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Function to login through Google account
  const signInWithGoogleAccount = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      if (response.user) {
        setUser({
          first_name: response.user.displayName,
          email: response.user.email,
          id: response.user.uid,
          last_name: response.user.displayName,
          role: "user",
        });
        setIsAuthenticated(true);
        setIsWithGoogleSignIn(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
    }
  };

  //  sign out from google account
  const signOutWithGoogle = async () => {
    try {
      await signOut(auth);
      setIsWithGoogleSignIn(false);
      setIsAuthenticated(false);
    } catch (error) {
      console.log("", error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        message,
        isAuthenticated,
        login,
        logout,
        signInWithGoogleAccount,
        isWithGoogleSignIn,
        signOutWithGoogle,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
