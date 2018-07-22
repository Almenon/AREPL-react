import {PythonEvaluator} from 'arepl-backend'

const myPython = new PythonEvaluator();
// initially pythonEvalFolderPath is assigned to __dirname before constructor is even called
// in which case it is just / which mucks things up
// @ts-ignore
myPython.pythonEvalFolderPath = process.cwd() + "\\node_modules\\arepl-backend\\python"
myPython.startPython();

interface actionType{
  type: string
};

export const PRINT_RESULT = 'PRINT_RESULT';
export const EXECUTION_COMPLETE = 'EXECUTION_COMPLETE';

export function printResult(printLine:string) {
  return {
    "type": PRINT_RESULT,
    "printLine":printLine
  };
}

export function executionComplete(result: any) {
  result['type'] = EXECUTION_COMPLETE;
  return result;
}

export function executeCode(code: {savedCode:string,evalCode:string}) {
    return (dispatch: (action: actionType) => void) => {
      myPython.debounce(()=>{
        myPython.onPrint = (printLine)=>{
          dispatch(printResult(printLine));
        }
        myPython.onResult = (result)=>{
            dispatch(executionComplete(result));
        }
  
        myPython.execCode(code);
      }, 400)
    };
}
