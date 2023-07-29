import { NextApiRequest } from 'next';

export interface ISignInReq {
  email: string;
  password: string;
}

export interface ISignUpReq {
  email: string;
  password: string;
  marketing_agreement: boolean;
}

export interface IUser {
  id: number;
  name: string
  thumbnail: string;
}
export interface ISignResult {
  token: string;
  user: IUser
}

export interface IResetPasswordReq {
  email: string;
}

export interface IApiRequest<T> extends NextApiRequest {
  body: T
}

export enum SnsList {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  BETWEEN = 'BETWEEN'
}

export interface ISnsInReq {
  provider: SnsList;
  google?: {
    access_token: string
  };
  facebook?: {
    sso_id: string;
    email: string;
    name: string;
    locale: string;
    picture: string;
  }
}
