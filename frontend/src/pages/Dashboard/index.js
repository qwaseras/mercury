import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Counter from '../../components/Dashboard/Counter';
import Header from '../../components/Layout/Header';

import {increase, decrease} from './actions';

class Dashboard extends Component {
  render() {
    const {counter, actions: {increase, decrease}} = this.props;
    return (
      <div>
        <Header/>
        <p>DASHBOARD</p>
        <Counter counter={counter} increase={increase} decrease={decrease} />
        <button onClick={() => this.props.history.push('/')}>
          go back
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.dashboard,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        increase,
        decrease,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
