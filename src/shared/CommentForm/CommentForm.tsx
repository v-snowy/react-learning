import React, { ChangeEvent, FormEvent } from 'react';
import styles from './commentForm.css';

interface CommentFormProps {
  comment: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: FormEvent) => void;
}

export function CommentForm({ comment, onChange, onSubmit }: CommentFormProps) {
  return (
    <form className={ styles.form } onSubmit={ onSubmit }>
      <textarea className={ styles.input } value={ comment } onChange={ onChange }></textarea>
      <button type='submit' className={ styles.button }>Add comment</button>
    </form>
  );
}
