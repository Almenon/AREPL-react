import Home from '../components/Home';
import {executeCode} from '../actions/arepl'
import {connect} from 'react-redux'

const mapStateToProps = (state:any, ownProps:any) => {
  return {}
}

const mapDispatchToProps = (dispatch:Function, ownProps:any) => {
  return {
    onCode: (code:{savedCode:string,evalCode:string}) => dispatch(executeCode(code)),
    onInput: (input:string) => console.log(input)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
