// @flow
import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import PyInput from './PyInput'
import Stdout from './Stdout'
import styles from './Home.css';
import Editor from './Editor';

type Props = {
  onCode: Function
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <Editor></Editor>
          <PyInput onCode={this.props.onCode}></PyInput>
          <Stdout></Stdout>
        </div>
      </div>
    );
  }
}

// <Link to="/counter">to Counter</Link>
// that's if i wanted to do a link
// ill probably use a link for a settings view