import React, {Component} from 'React'
import Error from './Error'
import VariableView from './VariableView'
import Stdout from './Stdout'

export default class Output extends Component<Props>{
    props: Props;
    mockVars = {'a':1,'b':"yo",'c':{'a':1},'d':[1,2,3,4]}

    render(){
        return <div>
            <Error errorMessage="testing error message\nexample stacktrace"></Error>
            <VariableView vars={this.mockVars}></VariableView>
            <Stdout></Stdout>
        </div>
    }
}