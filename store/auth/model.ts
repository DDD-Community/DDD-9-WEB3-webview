import { IResetPasswordReq, ISignInReq, ISignResult, ISignUpReq, ISnsInReq } from '@pages/api/auth/model';
import { IErrorData, IPutResult } from '@store/model';


export interface IAuthState {
  isLoading: boolean;
  token: string;
  user: ISignResult;
  error?: IErrorData | null;
  resetPassword: IPutResult | null
}
export interface IAuthAction {
  setToken: (p: string) => void;
  setUser: (p: ISignResult) => void;
  resetError: () => void;
  fetchSignIn: (p: ISignInReq) => void;
  fetchSnsIn: (p: ISnsInReq) => void;
  fetchSignUp: (p: ISignUpReq) => void;
  fetchResetPassword: (p: IResetPasswordReq) => void;
}
