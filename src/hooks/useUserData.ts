import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../shared/store/state';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(): IUserData[] {
  const token: string = useSelector<State, string>(({ token }: State) => token);
  const [data, setData] = useState<IUserData>({});

  useEffect(() => {
    axios.get(
      'https://oauth.reddit.com/api/v1/me',
      {
        headers: { Authorization: `bearer ${ token }` }
      }
    )
      .then(({ data }) => {
        setData({ name: data.name, iconImg: data.icon_img });
      })
      .catch(console.log)
  }, [token]);

  return [data];
}