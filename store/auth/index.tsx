import Api from '@/scripts/api';
import { IResetPasswordReq, ISignInReq, ISignResult, ISignUpReq, ISnsInReq } from '@pages/api/auth/model';
import { IAuthState, IAuthAction } from '@store/auth/model';
import { IErrorData, IErrorResult, IPutResult, IResponse } from '@store/model';
import create from 'zustand';
import useSWR, { mutate } from 'swr';

const authState: IAuthState = {
  isLoading: false,
  token: '',
  user: {} as ISignResult,
  error: null,
  resetPassword: null
}

export const useAuthStore = create<IAuthState & IAuthAction>(set => ({
  ...authState,
  setToken: param => set(state => {
    return { token: param };
  }),
  setUser: param => set(state => {
    return { user: param };
  }),
  resetError: () => set(state => {
    return { error: null }
  }),
  fetchSignIn: async (param: ISignInReq) => {
    try {
      const result = await Api.post<ISignResult, ISignInReq>('/api/auth/sign-in', param);
      set({
        token: result.token,
        user: result
      })
    } catch (err: any) {
      set({
        error: err.response.data
      })
    }
  },
  fetchSignUp: async (param: ISignUpReq) => {
    try {
      const result = await Api.post<ISignResult, ISignInReq>('/api/auth/sign-up', param);
      set({
        token: result.token,
        user: result
      })
    } catch (err: any) {
      set({
        error: err.response.data
      })
    }
  },
  fetchResetPassword: async (param: IResetPasswordReq) => {
    try {
      const result = await Api.post<IPutResult, IResetPasswordReq>('/api/auth/reset-password', param);
      set({
        resetPassword: result
      })
    } catch (err: any) {
      set({
        error: err.response.data
      })
    }
  },
  fetchSnsIn: async (param: ISnsInReq) => {
    try {
      const result = await Api.post<ISignResult, ISnsInReq>('/api/auth/sns-in', param);
      console.log(result)
      set({
        token: result.token,
        user: result
      })
    } catch (err: any) {
      set({
        error: err.response.data
      })
    }
  },
}))

export const AuthStore = () => {

}
