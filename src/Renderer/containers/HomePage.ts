import * as React from 'react';
import Home from '../components/Home';
import {executeCode} from '../actions/arepl'
import {connect} from 'react-redux'

const mapStateToProps = (state:any, ownProps:any) => {
  return {}
}

const mapDispatchToProps = (dispatch:Function, ownProps:any) => {
  return {
    onCode: (code:{savedCode:string,evalCode:string}) => dispatch(executeCode(code)),
    onInput: (input:string) => console.log(input),
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
