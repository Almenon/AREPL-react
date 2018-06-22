import React, {Component} from 'React'

export default class Editor extends Component<Props>{
    props: Props;

    render(){
        return <textarea style={{width:'400px',height:'800px',backgroundColor:'#d6d1d1'}}></textarea>
    }
}