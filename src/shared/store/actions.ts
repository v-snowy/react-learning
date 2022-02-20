import { ActionCreator } from 'redux';
import { SetTokenProps, TypedAction, UpdateCommentProps } from './models';

export enum ActionTypeEnum {
  UPDATE_COMMENT  = 'Update Comment',
  SET_TOKEN       = 'Set Token'
}

export const updateComment: ActionCreator<TypedAction<UpdateCommentProps>> = (comment: string) => ({
  type: ActionTypeEnum.UPDATE_COMMENT,
  comment
});

export const setToken: ActionCreator<TypedAction<SetTokenProps>> = (token: string) => ({
  type: ActionTypeEnum.SET_TOKEN,
  token
});