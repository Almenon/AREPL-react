// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PyInput from './PyInput'
import Stdout from './Stdout'
import styles from './Home.css';

type Props = {
  onCode: Function
};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div>
        <div className={styles.container} data-tid="container">
          <h2>Home</h2>
          <Link to="/counter">to Counter</Link>
          <PyInput onCode={this.props.onCode}></PyInput>
          <Stdout></Stdout>
        </div>
      </div>
    );
  }
}
