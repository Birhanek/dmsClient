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

export default SignupFormData;
