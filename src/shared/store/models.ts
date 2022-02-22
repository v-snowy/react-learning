import { ActionTypeEnum } from './actions';

export type UpdateCommentType = {
  type: ActionTypeEnum.UPDATE_COMMENT,
  comment: string;
}

export type SetTokenType = {
  type: ActionTypeEnum.SET_TOKEN,
  token: string;
}

export type MeRequestType = {
  type: ActionTypeEnum.ME_REQUEST;
}

export type MeRequestSuccessType = {
  type: ActionTypeEnum.ME_REQUEST_SUCCESS;
  data: IUserData;
}

export type MeRequestFailedType = {
  type: ActionTypeEnum.ME_REQUEST_FAILED;
  error: Error;
}
export interface IUserData {
  name?: string;
  iconImg?: string;
}