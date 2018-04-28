// @flow
import React, {Component} from 'react'

type Props = {}
type State = {
    value:string
}

export default class PyInput extends Component<Props,State>{
    props: Props
    state = {value: '>> input'}
  
    handleChange = (event:any) =>{
        //handleChange is not invoked upon enter so no logic here
        this.setState({value: event.target.value});
    }

    handleKeyPress = (event:any)=>{
        if(event.key == "Enter"){
            //send input (this.state.value) over to AREPL-backend
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
*/