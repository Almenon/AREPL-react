// @flow
import React, { Component } from 'react';
import Home from '../components/Home';

type Props = {};

/*
React containers are the logic that encapsulates the view (components)
ex: make API call here, pass data in as param to component for rendering
Good practice but we have no logic here so for now its just useless boilerplate code
*/
export default class HomePage extends Component<Props> {
  props: Props;

  render() {
    return (
      <Home />
    );
  }
}
