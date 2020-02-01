import { PRINT_RESULT, EXECUTION_COMPLETE } from '../actions/arepl';
import { PythonResult } from 'arepl-backend';

export interface areplState extends PythonResult{
  stdout:string[],
  justExecuted:boolean
}

const initialState:areplState = {
	userError:'',
	userVariables:{},
	execTime:0,
	totalPyTime:0,
	totalTime:0,
	internalError:'',
	caller: '',
	lineno:0,
  done: false,
  stdout:[],
  justExecuted:false,
}

function printReducer(state: areplState, action:string){
  const newState = {...state};
  if(newState.justExecuted){
    newState.justExecuted = false;
    newState.stdout = [];
  }
  newState.stdout.push(action);
  return newState;
}

function executionReducer(state:areplState, action:any){
  const newState = {...state, ...action};

  if(newState.justExecuted){
    newState.stdout = [];
  }

  newState.justExecuted = true;

  return newState;
}

export default function areplReducer(state: areplState = initialState, action: any) {
  switch (action.type) {
    case PRINT_RESULT:
      return printReducer(state, action.printLine)
    case EXECUTION_COMPLETE:
      return executionReducer(state, action);
    default:
      return state;
  }
}
