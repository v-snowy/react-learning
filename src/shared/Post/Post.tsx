import React from 'react';
import ReactDOM from 'react-dom';
import styles from './post.css';

export function Post() {
  const node = document.querySelector('#modal_root');

  if (!node) {
    return null;
  }

  return ReactDOM.createPortal(
    (
      <div className={ styles.modal }>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, consectetur!</h2>

        <div className={ styles.content }>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat iusto vel mollitia ut ducimus et autem ullam perferendis tempore.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat iusto vel mollitia ut ducimus et autem ullam perferendis tempore.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis repellat iusto vel mollitia ut ducimus et autem ullam perferendis tempore.</p>
        </div>
      </div>
    ),
    node
  );
}