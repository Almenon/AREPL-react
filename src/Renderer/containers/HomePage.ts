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
    onInput: input => console.log(input),
    output: {
      vars: {'a':1,'b':"yo",'c':{'a':1},'d':[1,2,3,4]},
      errMessage: "testing error message\nexample stacktrace",
      execTime: 0,
      totalTime:0
    },
    printResult: "mock print"
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
