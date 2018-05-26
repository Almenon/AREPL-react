// @flow
import React, {Component} from 'react'

type Props = {
    onCode:Function
}
type State = {
    value:string
}

export default class PyInput extends Component<Props,State>{
    props: Props
    state = {value: '>> input'}
  
    handleChange = ({target}:SyntheticInputEvent<>) =>{
        //handleChange is not invoked upon enter so no logic here
        this.setState({value: target.value});
    }

    handleKeyPress = (event:SyntheticKeyboardEvent<>)=>{
        if(event.key == "Enter"){
            //send input (this.state.value) over to AREPL-backend as stdin
            // for now wiring this to arepl code input for test purposes
            this.props.onCode({savedCode:"",evalCode:this.state.value})
            console.log(this.state.value)
            this.setState({value: ""});
        }
    }
  
    render() {
      return <input id="stdin" class="rounded" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>;
    }
  }

/* NOTES
tried typing event with SyntheticKeyboardEvent<HTMLInputElement>
but flow still didn't like event.target.value :(
see https://github.com/facebook/flow/issues/368

when first developing this i made mistake of assigning state directly - but that doesnt trigger re-render of component
i also ran into binding issues ~ see https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
*/