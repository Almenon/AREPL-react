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
    onCode: code => dispatch(executeCode(code))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
