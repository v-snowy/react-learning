import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/state';
import { Card } from './Card';
import styles from './cardsList.css';

export function CardsList() {
  const token: string = useSelector<RootState, string>(({ token }: RootState) => token);
  const [posts, setPosts] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  const [errorLoading, setErrorLoading] = useState('');
  const [nextAfter, setNextAfter] = useState('');

  const bottomOfList: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      setErrorLoading('');

      try {
        const { data: { data: { after, children } } } = await axios.get(
          'https://oauth.reddit.com/new/', 
          {
            headers: { Authorization: `bearer ${ token }` },
            params: {
              limit: 10,
              after: nextAfter
            }
          }
        );

        setNextAfter(after);
        setPosts((prevChildren: any[]) => prevChildren.concat(...children));
      } catch (error) {
        setErrorLoading(String(error));
      }
      
      setLoading(false);
    }

    const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        load();
      }
    }, {
      rootMargin: '100px'
    });

    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }

    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [bottomOfList.current, nextAfter, token]);

  return (
    <ul className={ styles.cardsList }>
      {
        posts.length === 0 && !loading && !errorLoading && (
          <div style={{ textAlign: 'center' }}>No posts</div>
        )
      }

      {
        posts.map(({ data }: any, index: number) => (
          <Card
            key={ data.id + index }
            title={ data.title }
            author={ data.author }
            thumbnail={ data.thumbnail }
            commentsCount={ data.num_comments }
            karmaValue={ data.score }
          ></Card>
        ))
      }

      <div ref={ bottomOfList } />

      {
        loading && (
          <div style={{ textAlign: 'center' }}>Loading ...</div>
        )
      }

      {
        errorLoading && (
          <div role="alert" style={{ textAlign: 'center' }}>{ errorLoading }</div>
        )
      }
    </ul>
  );
}
