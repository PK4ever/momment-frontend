export interface SignupState {
  isSuccess: boolean;
  user: User;
}

export interface Credentials {
  name: any,
  email: any,
  password: any,
}

export interface User {
  name: string;
  email: string;
  emailVerified: boolean;
}
