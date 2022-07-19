export interface IEventLogin {
  name: string;
  value: string;
}

export interface IUserLogin {
  email?: string;
  password?: string;
}

export interface IUserLogged {
  email: string;
  username: string;
  token: string;
}
