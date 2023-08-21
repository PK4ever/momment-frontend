import {User} from "../../signup-container/store/signupState";

export interface LoginState {
  status: boolean,
  user: LoginUser | undefined,
  message: string
}

export interface LoginCredentials {
  email: string,
  password: string,
}

export interface LoginUser {
  id: number;
  email: string;
  name:  string;
}
