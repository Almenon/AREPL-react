// @flow
import type { counterStateType } from '../reducers/counter';
import {PythonEvaluator} from 'arepl-backend'

let myPython = new PythonEvaluator();
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
        
        myPython.execCode(code);

        myPython.onPrint = (printLine)=>{
            dispatch(printResult(printLine));
        }
        myPython.onResult = (result)=>{
            dispatch(executionComplete(result));
        }
    };
}
