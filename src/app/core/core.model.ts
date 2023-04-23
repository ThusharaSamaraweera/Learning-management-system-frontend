
export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    role: USER_ROLES;
  }

export enum USER_STATUS {
    ACTIVE = "ACTIVE",
    ACHIEVED = "ACHIEVED",
  }

  export enum USER_ROLES {
    USER = "USER",
    ADMIN = "ADMIN",
  }


export interface signInResponse {
    statusCode: number,
    data: SignInResData
}

export interface SignInResData {
    user: IUser,
    token: string
}

