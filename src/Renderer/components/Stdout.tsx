// @flow
import React, {Component} from 'react'

type Props = {
    newLine:string
}

export default class Stdout extends Component<Props,State>{
    props: Props
    newLines = [""]

    clear(){
        this.newLines = [""]
    }
  
    render() {
        this.newLines.push(this.props.newLine);
        return <div style={{whiteSpace:"pre-wrap"}}>{this.newLines.join("\n")}</div>;
    }
  }