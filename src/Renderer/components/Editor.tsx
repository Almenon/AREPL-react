import * as React from 'React'

type Props = {
    onCode:Function
}

export default class Editor extends React.Component<Props>{
    props: Props;

    handleChange = (event:SyntheticKeyboardEvent<>) => {
        this.props.onCode({savedCode:"",evalCode:event.target.value})
    }

    render(){
        return <textarea style={{width:'400px',height:'800px',backgroundColor:'#d6d1d1'}} onChange={this.handleChange}></textarea>
    }
}