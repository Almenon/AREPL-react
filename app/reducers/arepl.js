// @flow
import { PRINT_RESULT, EXECUTION_COMPLETE } from '../actions/arepl';

export type counterStateType = {
  +counter: number // + means read-only
};

type actionType = {
  +type: string
};

export default function arepl(state: any, action: actionType) {
  switch (action.type) {
    case PRINT_RESULT:
      return state;
    case EXECUTION_COMPLETE:
      return state;
    default:
      return state;
  }
}
