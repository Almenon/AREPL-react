import * as React from 'React'

export default class Error extends React.Component<Props>{
    props: Props;

    render(){
        return <div style={{width:'200px',height:'200px',color:'red'}}>{this.props.errorMessage}</div>
    }
}