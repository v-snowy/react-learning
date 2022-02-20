import { Middleware } from 'redux';

export const logger: Middleware = (store) => (next) => (action) => {
  console.log('Dispatching: ', action);
  next(action);
};