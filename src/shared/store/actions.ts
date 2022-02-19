import { ActionCreator } from 'redux';
import { TypedAction, UpdateCommentProps } from './models';

export enum ActionTypeEnum {
  UPDATE_COMMENT = 'Update Comment'
}

export const updateComment: ActionCreator<TypedAction<UpdateCommentProps>> = (comment: string) => ({
  type: ActionTypeEnum.UPDATE_COMMENT,
  comment
});