import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { meRequestAsync } from '../shared/store/actions';
import { MeState, RootState } from '../shared/store/state';

export function useUserData(): Pick<MeState, 'data' | 'loading'> {
  const { data, loading }: MeState = useSelector<RootState, MeState>(({ me }: RootState) => me);
  const token: string = useSelector<RootState, string>(({ token }: RootState) => token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      return;
    }

    dispatch(meRequestAsync());
  }, [token]);

  return {
    data,
    loading
  };
}