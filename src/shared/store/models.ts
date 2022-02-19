export type TypedAction<T> = { type: string } & T;

export interface UpdateCommentProps {
  type: string;
  comment: string;
}