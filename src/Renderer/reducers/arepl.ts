import { PRINT_RESULT, EXECUTION_COMPLETE } from '../actions/arepl';

interface actionType {
  type: string
};

export interface areplState {ERROR:string, userVariables:Object, execTime:number, totalPyTime:number, totalTime:number}

const initialState:areplState = {ERROR: '', userVariables: {}, execTime:0,totalPyTime: 0, totalTime: 0}

export default function areplReducer(state: areplState = initialState, action: actionType) {
  switch (action.type) {
    case PRINT_RESULT:
      return {...state, ...action};
    case EXECUTION_COMPLETE:
      return {...state, ...action};
    default:
      return state;
  }
}
