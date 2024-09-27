import { createContext, useState, useContext, ReactNode, FC } from "react";
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

  // Function to log in
  const login = async (obj: LoginFormData) => {
    try {
      const response = await axios.post("http://127.0.0.1:5000/login", obj);
      if (response.data.ok) {
        const data = await response.data.data;
        setUser(data); // Set the user data from the database
        console.log(response);
        setMessage(response.data.message); // Set the message data from the database
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
      setIsAuthenticated(false);
    }
  };

  // Function to log out
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, message, isAuthenticated, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
