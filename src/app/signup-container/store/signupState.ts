export interface SignupState {
  isSuccess: boolean;
  user: User | undefined;
}

export interface Credentials {
  name: any,
  email: any,
  password: any,
}

export interface User {
  name: string;
  email: string;
  isEnabled: boolean;
}
