import * as React from 'React'

type Props = {
    onCode:Function
}

export default class Editor extends React.Component<Props>{
    props: Props;

    handleChange = (event:any) => {
        const text:string = event.target.value
        this.props.onCode({savedCode:"",evalCode:text})
    }

    render(){
        return <textarea style={{width:'400px',height:'800px',backgroundColor:'#d6d1d1'}} onChange={this.handleChange}></textarea>
    }
}