interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: string;
}

export interface LoginFormData {
  password: string;
  email: string;
}

export type IUser = {
  id: number;
  role: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type IMessage = {
  message: string;
};

// Define the shape of our context's value
export interface AuthContextType {
  user: IUser | null;
  isAuthenticated: boolean;
  login: (obj: LoginFormData) => Promise<void>;
  logout: () => void;
  message: IMessage | undefined;
}

export default SignupFormData;
