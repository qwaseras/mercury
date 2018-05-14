import React, {Component} from 'react';
import {Icon} from 'react-fa';

import {getUserEmail, logout} from '../../../common/utils/auth';

import './index.css';

import logo from './logo.png';

class Header extends Component {
  render() {
    return (
      <header>
        <div>
          <img src={logo} alt="logo"/>
        </div>
        <div class="login-info">
          <span>{getUserEmail()}</span>
          <Icon name='sign-out' onClick={logout}/>
        </div>
      </header>
    );
  }
}

export default Header;
