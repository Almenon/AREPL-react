import React, {Component} from 'React'
import Error from './Error'
import VariableView from './VariableView'
import Stdout from './Stdout'

type Props = {
    output:{
        vars: {},
        errMessage: string,
        execTime: string,
        totalTime: string
    }
}

export default class Output extends Component<Props>{
    props: Props;

    render(){
        return <div>
            <Error errorMessage={this.props.output.errMessage}></Error>
            <VariableView vars={this.props.output.vars}></VariableView>
            <Stdout></Stdout>
        </div>
    }
}