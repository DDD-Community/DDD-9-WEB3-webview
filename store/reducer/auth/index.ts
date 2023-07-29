import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import Api from '@/scripts/api';
import { ISignInReq, ISignResult } from '@pages/api/auth/model';
import { postFetcher } from '@pages/api/utils';
import { createSelector, createSlice } from '@reduxjs/toolkit';
import { IAuthState } from '@store/reducer/auth/model';
import { RootState } from '@store/reducer/index';

const initialState: IAuthState = {
  token: '',
  user: {} as ISignResult
}

export const signUp = createAsyncThunk<
  ISignResult,
  ISignInReq,
  { rejectValue: { message: string } }
>('authStore/signUp',
  async (userData, { rejectWithValue }) => {
    try {
      return await postFetcher<ISignResult, ISignInReq>('/api/auth/sign-up', userData);
    } catch (err) {
      return rejectWithValue({ message: 'Failed to sign up' });
    }
  }
);

export const authSlice = createSlice({
  name: 'authStore',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      Api.setToken(state.token);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state, { payload }) => {
      console.log('SSSSignup', payload)
      state.user = payload;
      state.token = payload.token;
      Api.setToken(payload.token);
    });
    builder.addCase(signUp.pending, (state, { payload }) => {
    });
    builder.addCase(signUp.rejected, (state) => {
    });
  },
})

export const authStore = authSlice.name;
export const authStoreReducer = authSlice.reducer;
export const authStoreAction = authSlice.actions;
export const tokenSelector = (state: RootState) => state.authStore.token;
export const computedToken = createSelector(tokenSelector, x => x);
export const userSelector = (state: RootState) => state.authStore.user;
export const computedUser = createSelector(userSelector, x => x);
