import Web3 from 'web3';

import {WEB3_CONNECTED, WEB3_DISCONNECTED} from './constants';

export const web3Connect = () => {
  return async (dispatch, getState) => {
    let state = {};
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      state = {type: WEB3_CONNECTED, payload: {web3, isConnected: true}};
    } else if (window.web3) {
      state = {type: WEB3_CONNECTED, payload: {web3: new Web3(window.web3.currentProvider), isConnected: true}};
    } else {
      state = { type: WEB3_DISCONNECTED, payload: { web3: null, isConnected: false } };
    }
    dispatch(state);
  };
};

export const web3Connected = ({ web3, isConnected }) => {
  return {
    type: WEB3_CONNECTED,
    payload: {
      web3,
      isConnected
    }
  };
};

export const web3Disconnected = () => {
  return {
    type: WEB3_DISCONNECTED,
    payload: {
      web3: null,
      isConnected: false
    }
  };
};

export const actions = {
  web3Connect,
  web3Connected,
  web3Disconnected
};