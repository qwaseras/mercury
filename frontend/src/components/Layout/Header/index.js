import React, {Component} from 'react';
import {Icon} from 'react-fa';

import {getUserEmail, logout} from '../../../common/utils/auth';

import './index.css';


class Header extends Component {
  handleLogout = async () => {
    await logout()
    this.props.history.push('/')
  }
  render() {
    return (
      <header>
        <div>
          <img alt="logo"/>
        </div>
        <div className="login-info">
          <span>{getUserEmail()}</span>
          <Icon name='sign-out' onClick={this.handleLogout}/>
        </div>
      </header>
    );
  }
}

export default Header;
