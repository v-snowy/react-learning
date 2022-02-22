import { IUserData } from './models';

export interface RootState {
  comment: string;
  token: string;
  me: MeState;
}

export interface MeState {
  loading: boolean;
  data: IUserData;
  error: Error | null;
}

export const initialState: RootState = {
  comment: '',
  token: '',
  me: {
    loading: false,
    data: {},
    error: null
  }
};
