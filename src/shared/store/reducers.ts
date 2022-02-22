import { Reducer } from 'redux';
import { ActionTypeEnum } from './actions';
import { MeRequestFailedType, MeRequestSuccessType, MeRequestType, SetTokenType, UpdateCommentType } from './models';
import { initialState, MeState, RootState } from './state';

type ActionType = UpdateCommentType | SetTokenType | MeActionType;
type MeActionType = MeRequestType | MeRequestSuccessType | MeRequestFailedType;

export const rootReducer: Reducer<RootState, ActionType> = (state: RootState = initialState, action: ActionType) => {
  switch (action.type) {
    case ActionTypeEnum.UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment
      };
    case ActionTypeEnum.SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case ActionTypeEnum.ME_REQUEST:
    case ActionTypeEnum.ME_REQUEST_SUCCESS:
    case ActionTypeEnum.ME_REQUEST_FAILED:
      return {
        ...state,
        me: meReducer(state.me, action)
      };
    default:
      return state;
  }
};

export const meReducer: Reducer<MeState, MeActionType> = (state: MeState = initialState.me, action: MeActionType) => {
  switch (action.type) {
    case ActionTypeEnum.ME_REQUEST:
      return {
        ...state,
        loading: true
      };
    case ActionTypeEnum.ME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        data: action.data
      };
    case ActionTypeEnum.ME_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};