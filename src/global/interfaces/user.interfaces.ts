export interface IEventLogin {
  name: string;
  value: string;
}

export interface IUserLogin {
  email?: string;
  password?: string;
}

export interface IUserLogged {
  id: number;
  name: string;
  lastname: string;
  email: string;
  isActive: boolean;
  token: string;
}
