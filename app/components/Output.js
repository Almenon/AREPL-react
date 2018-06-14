import React, {Component} from 'React'
import Error from './Error'
import VariableView from './VariableView'
import Stdout from './Stdout'

export default class Output extends Component<Props>{
    props: Props;

    render(){
        return <div>
            <Error></Error>
            <VariableView></VariableView>
            <Stdout></Stdout>
        </div>
    }
}