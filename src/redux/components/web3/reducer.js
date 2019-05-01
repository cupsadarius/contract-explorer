import {WEB3_CONNECTED, WEB3_DISCONNECTED} from './constants';

const initialState = { isConnected: false, web3: null };

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case WEB3_CONNECTED: 
      return {
        ...state,
        ...action.payload
      };
    case WEB3_DISCONNECTED:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};