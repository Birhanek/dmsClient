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
  id: number | string;
  role: string;
  first_name: string | null;
  last_name: string | null;
  email: string | null;
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
  signInWithGoogleAccount: () => void;
  isWithGoogleSignIn: boolean;
  signOutWithGoogle: () => void;
}
export interface DiagonalCutImageProps {
  src: string;
  alt?: string;
}
export interface CalloutProps {
  title: string;
}
export default SignupFormData;
