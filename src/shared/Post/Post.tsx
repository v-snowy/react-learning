import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { CommentFormContainer } from '../CommentFormContainer';
import styles from './post.css';

interface IPost {
  onClose?: () => void
}

export function Post({ onClose }: IPost) {
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      // Clicked outside the modal
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        // Changed after adding routing for modal
        // onClose?.()
        history.push('/');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  const node = document.querySelector('#modal_root');

  if (!node) {
    return null;
  }

  return ReactDOM.createPortal(
    (
      <div className={ styles.modal } ref={ ref }>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur!</h2>

        <div className={ styles.content }>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat iusto vel mollitia ut ducimus et autem ullam perferendis tempore.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat iusto vel mollitia ut ducimus et autem ullam perferendis tempore.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat iusto vel mollitia ut ducimus et autem ullam perferendis tempore.</p>
        </div>

        <CommentFormContainer />
      </div>
    ),
    node
  );
}