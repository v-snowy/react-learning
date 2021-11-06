import { assoc } from '../js/assoc';

export const getRandomString = () => Math.random().toString(32).substring(2, 15);

export const assignId = assoc('id', getRandomString());

export const generateId = <O extends object>(obj: O) => assignId(obj);