import * as React from 'React'

type Props = {
    onInput:Function
}
type State = {
    value:string
}

export default class PyInput extends React.Component<Props,State>{
    state = {value: '>> input'}
  
    handleChange = (event:any) =>{
        // handleChange is not invoked upon enter so no logic here
        const text:string = event.target.value
        this.setState({value: text});
    }

    handleKeyPress = (event:React.KeyboardEvent<HTMLInputElement>)=>{
        if(event.key === "Enter"){
            this.props.onInput(this.state.value)
            this.setState({value: ""});
        }
    }
  
    render() {
      return <input style={{display:"inherit"}} id="stdin" type="text" value={this.state.value} onChange={this.handleChange} onKeyPress={this.handleKeyPress}/>;
    }
  }

/* NOTES
when first developing this i made mistake of assigning state directly - but that doesnt trigger re-render of component
i also ran into binding issues ~ see https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56
*/