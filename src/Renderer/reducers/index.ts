import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { counterReducer, counterState } from './counter';
import areplReducer, { areplState } from './arepl';

export interface RootState {
  counter: counterState;
  router: RouterState;
  arepl: areplState
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  router: routerReducer,
  arepl: areplReducer
});