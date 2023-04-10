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