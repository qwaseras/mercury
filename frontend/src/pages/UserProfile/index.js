import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Layout/Header';
import UserInfo from '../../components/UserProfile/UserInfo';
import {getUserNickname} from '../../common/utils/auth';
import {
  loadUser,
} from './actions';

class UserProfile extends Component {
  handleUserLoad = () => {
    const nickname = this.props.match.params.nickname;
    this.props.actions.loadUser(nickname);
  }
  render() {
    const {
      user,
    } = this.props;
    return (
      <div>
        <Header history={this.props.history} hideImg={true}/>
        <UserInfo user={user} loadUser={this.handleUserLoad}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.userProfile,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadUser,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
