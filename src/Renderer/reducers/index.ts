import { combineReducers } from 'redux';
import { routerReducer, RouterState } from 'react-router-redux';
import { counterReducer, counterState } from '@red/counter';
import areplReducer, { areplState } from '@red/arepl';

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