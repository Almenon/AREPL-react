// @flow
import * as React from 'React'

type Props = {
    newLine:string
}

export default class Stdout extends React.Component<Props,State>{
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