import * as c from './constants';

const initialState = {
  data: {
    address: '',
    abi: '',
  },
  error: {
    address: '',
    abi: ''
  }
};


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case c.SET_FIELD:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        }
      };
      case c.SET_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          ...action.payload
        }
      };
    default: {
      return state;
    }
  }
};
