import * as React from 'React'
import Error from './Error'
import Stdout from './Stdout'
import { connect } from 'react-redux';
import { RootState } from '@red/index';
import ReactJson from 'react-json-view'

type Props = {
    output:{ERROR:string, userVariables:Object, execTime:number, totalPyTime:number, totalTime:number},
    printResult:string
}

export class Output extends React.Component<Props>{

    render(){
        return <div>
            <Error errorMessage={this.props.output.ERROR}/>
            <ReactJson src={this.props.output.userVariables} collapseStringsAfterLength={90} displayDataTypes={false} name={false} enableClipboard={false} collapsed={2} style={{fontSize:"16px"}}/>
            <Stdout newLine={this.props.printResult}/>
        </div>
    }
}

function mapStateToProps(state: RootState) {
    return {
        output: state.arepl,
        printResult: "hardcoding print result for now"
    }
  }
  
export default connect(mapStateToProps, ()=>{})(Output as any);