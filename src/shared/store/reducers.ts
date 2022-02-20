import { Reducer } from 'redux';
import { ActionTypeEnum } from './actions';
import { initialState, State } from './state';

export const rootReducer: Reducer<State> = (state = initialState, action) => {
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
    default:
      return state;
  }
};