// @flow
import React, { Component } from 'react';
import Home from '../components/Home';
import {executeCode} from '../actions/arepl'
import {connect} from 'react-redux'

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onCode: code => dispatch(executeCode(code)),
    onInput: input => console.log(input)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
