import * as c from './constants';
import { actionCreator } from '../../../utils/redux';

export const setField = actionCreator(c.SET_FIELD);
export const setError = actionCreator(c.SET_ERROR);
