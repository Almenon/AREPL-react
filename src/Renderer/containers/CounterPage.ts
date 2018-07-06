import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { actionCreators } from '../actions/counter';
import { RootState } from '../reducers/index';

function mapStateToProps(state: RootState) {
  return {
    counter: state.counter.counter
  };
}

function mapDispatchToProps(dispatch: any) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter as any);