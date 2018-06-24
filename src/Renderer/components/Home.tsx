// @flow
import * as React from 'react';
// import { Link } from 'react-router-dom';
import PyInput from './PyInput'
import Output from './Output'
const styles  = require('./Home.css');
import Editor from './Editor';

type Props = {
  onCode: Function,
  onInput: Function,
  output: Object,
  printResult: string
};

export default class Home extends React.Component<Props> {
  props: Props;

  render() {
    return (
      <div style={{display:'flex',flexDirection:'row'}}>
        <div className={styles.editorGroup}>
          <Editor onCode={this.props.onCode}></Editor>
          <PyInput onInput={this.props.onInput}></PyInput>
        </div>
        <div className={styles.output}>
          <Output output={this.props.output} printResult={this.props.printResult}></Output>
        </div>
      </div>
    );
  }
}

// <Link to="/counter">to Counter</Link>
// that's if i wanted to do a link
// ill probably use a link for a settings view