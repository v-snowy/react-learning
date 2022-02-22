import axios from 'axios';
import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  IUserData, MeRequestFailedType, MeRequestSuccessType, MeRequestType, SetTokenType,
  UpdateCommentType
} from './models';
import { RootState } from './state';

export enum ActionTypeEnum {
  UPDATE_COMMENT      = 'Update Comment',
  SET_TOKEN           = 'Set Token',
  ME_REQUEST          = 'Me Request',
  ME_REQUEST_SUCCESS  = 'Me Request Success',
  ME_REQUEST_FAILED   = 'Me Request Failed',
}

export const updateComment: ActionCreator<UpdateCommentType> = (comment: string) => ({
  type: ActionTypeEnum.UPDATE_COMMENT,
  comment
});

export const setToken: ActionCreator<SetTokenType> = (token: string) => ({
  type: ActionTypeEnum.SET_TOKEN,
  token
});

export const meRequest: ActionCreator<MeRequestType> = () => ({
  type: ActionTypeEnum.ME_REQUEST
});

export const meRequestSuccess: ActionCreator<MeRequestSuccessType> = (data: IUserData) => ({
  type: ActionTypeEnum.ME_REQUEST_SUCCESS,
  data
});

export const meRequestFailed: ActionCreator<MeRequestFailedType> = (error: Error) => ({
  type: ActionTypeEnum.ME_REQUEST_FAILED,
  error
});

export const meRequestAsync = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState) => {
  dispatch(meRequest());
  axios.get(
    'https://oauth.reddit.com/api/v1/me',
    {
      headers: { Authorization: `bearer ${ getState().token }` }
    }
  )
    .then(({ data }) => {
      const userData: IUserData = { name: data.name, iconImg: data.icon_img };
      dispatch(meRequestSuccess(userData));
    })
    .catch((error: Error) => {
      console.log(error);
      dispatch(meRequestFailed(error));
    });
};