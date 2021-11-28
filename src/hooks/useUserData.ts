import { useEffect, useState } from 'react';
import axios from 'axios';

interface IUseData {
  name?: string;
  iconImg?: string;
}

export function useUserData(token: string): IUseData[] {
  const [data, setData] = useState<IUseData>({});

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