// @flow
import type { counterStateType } from '../reducers/counter';
import {PythonEvaluator} from 'arepl-backend'

let myPython = new PythonEvaluator();
// initially pythonEvalFolderPath is assigned to __dirname before constructor is even called
// in which case it is just / which mucks things up
myPython.pythonEvalFolderPath = process.cwd() + "\\node_modules\\arepl-backend\\python"
myPython.startPython();

type actionType = {
  +type: string
};

export const PRINT_RESULT = 'PRINT_RESULT';
export const EXECUTION_COMPLETE = 'EXECUTION_COMPLETE';

export function printResult(printLine:string) {
  return {
    type: PRINT_RESULT,
    printLine:printLine
  };
}

// flow SHOULD have picked up on result type from arepl but is acting wierd
export function executionComplete(result: any) {
  result['type'] = EXECUTION_COMPLETE;
  return result;
}

export function executeCode(code: {savedCode:string,evalCode:string}) {
    return (dispatch: (action: actionType) => void) => {
        
      myPython.onPrint = (printLine)=>{
        dispatch(printResult(printLine));
      }
      myPython.onResult = (result)=>{
          dispatch(executionComplete(result));
      }

      myPython.execCode(code);
      
    };
}
