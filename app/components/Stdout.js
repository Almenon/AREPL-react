// @flow
import React, {Component} from 'react'

type Props = {}
type State = {
    stdout:string[]
}

export default class Stdout extends Component<Props,State>{
    props: Props
    state = {stdout: ['test','test2']}
  
    handleChange(newLine:string){
        this.setState(prevState => {
            stdout: prevState.stdout.concat(newLine)
        });
    }

    clear(){
        this.setState({stdout:[""]})
    }
  
    render() {
      return <div id="stdout">{this.state.stdout.join("\n")}</div>;
    }
  }