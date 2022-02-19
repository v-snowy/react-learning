import { useSelector } from 'react-redux';
import { State } from './state';

export const comment: string = useSelector<State, string>(({ comment }: State) => comment);