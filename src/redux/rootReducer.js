import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Web3 from './components/web3/reducer';
import Reader from './components/reader/reducer';

export default combineReducers({
  routing: routerReducer,
  Web3,
  Reader
});
