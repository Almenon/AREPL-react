import * as React from 'React'
import Error from './Error'
import Stdout from './Stdout'
import { connect } from 'react-redux';
import { RootState } from '@red/index';
import ReactJson from 'react-json-view'
import { areplState } from '@red/arepl';

type Props = {
    output:areplState
}

export class Output extends React.Component<Props>{

    render(){
        return <div>
            <Error errorMessage={this.props.output.userError}/>
            <ReactJson src={this.props.output.userVariables} collapseStringsAfterLength={90} displayDataTypes={false} name={false} enableClipboard={false} collapsed={2} style={{fontSize:"16px"}}/>
            <Stdout lines={this.props.output.stdout}/>
        </div>
    }
}

function mapStateToProps(state: RootState) {
    return {
        output: state.arepl
    }
  }
  
export default connect(mapStateToProps, ()=>{})(Output as any);