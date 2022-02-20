export type TypedAction<T> = { type: string } & T;

export interface UpdateCommentProps {
  comment: string;
}

export interface SetTokenProps {
  token: string;
}