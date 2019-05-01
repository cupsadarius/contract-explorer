import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
// import promiseMiddleware from "./promiseMiddleware"
import rootReducer from "./rootReducer";
import { createBrowserHistory } from 'history';
import { IS_DEVELOPMENT } from '../config';

export const history = createBrowserHistory();

const logger = createLogger({
  collapsed: true,
  logger: console
});

const store = createStore(
  rootReducer,
  IS_DEVELOPMENT ? applyMiddleware(thunk, logger, routerMiddleware(history)) : applyMiddleware(thunk)
);

export default store;
