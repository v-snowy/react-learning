import React, { ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CommentForm } from '../CommentForm';
import { updateComment } from '../store/actions';
import { State } from '../store/state';

export function CommentFormContainer() {
  const comment: string = useSelector<State, string>(({ comment }: State) => comment);
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <CommentForm
      comment={ comment }
      onChange={ handleChange }
      onSubmit={ handleSubmit }
    />
  );
}
