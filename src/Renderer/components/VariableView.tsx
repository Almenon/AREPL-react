import * as React from 'React'

export default class VariableView extends React.Component<Props>{
    props: Props;

    render(){
        return <div style={{width:'200px',height:'200px'}}>{JSON.stringify(this.props.vars)}</div>
    }
}