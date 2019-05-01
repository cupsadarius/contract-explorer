
import * as ac from './actionCreators';

export function setField(field, value) {
  return dispatch => dispatch(ac.setField({ [`${field}`]: value }));
}

export function setError(field, value) {
  return dispatch => dispatch(ac.setError({ [`${field}`]: value }));
}
