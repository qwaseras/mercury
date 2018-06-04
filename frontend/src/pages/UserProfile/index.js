import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Layout/Header';
import UserInfo from '../../components/UserProfile/UserInfo';
import {
  loadUser,
  loadUsersBlogs,
} from './actions';

class UserProfile extends Component {
  handleUserLoad = () => {
    const nickname = this.props.match.params.nickname;
    this.props.actions.loadUser(nickname).then(() => {
      this.props.actions.loadUsersBlogs(nickname);
    }).catch(()=> {
      this.props.history.push('/');
    });
  }
  render() {
    const {
      user,
      blogs,
    } = this.props;
    return (
      <div>
        <Header
          history={this.props.history}
          hideImg={true}
          loadUser={this.handleUserLoad}
        />
        <UserInfo
          user={user}
          history={this.props.history}
          loadUser={this.handleUserLoad}
          blogs={blogs}/>
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
        loadUsersBlogs,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
