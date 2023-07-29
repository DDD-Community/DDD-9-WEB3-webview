import Api from '@/scripts/api';
import { ISignResult, IUser } from '@pages/api/auth/model';

export interface IAuthState {
  token: string;
  user: ISignResult
}
