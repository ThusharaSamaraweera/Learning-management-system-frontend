import { IUser } from "src/app/core/core.model"

export interface signInResponse {
    statusCode: number,
    data: SignInResData
}

export interface SignInResData {
    user: IUser,
    token: string
}

