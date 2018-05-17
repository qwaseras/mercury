import React, {Component} from 'react';
import {PulseLoader} from 'react-spinners';
import {login} from '../../common/utils/auth';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      invalidData: false,
      loading: false,
    };
  }
  handleLogIn = () => {
    this.setState({loading: true});
    login(
      this.emailInput.value,
      this.passInput.value
    ).then( () => {
      this.props.history.push('/');
    }).catch( (response) => {
      this.setState({invalidData: true, loading: false});
    });
  }

  handleKeUp = (e) => {
    if ( e.key === 'Enter') {
      this.handleLogIn();
    }
  }

  signupRedirect = () => {
    this.props.history.push('/signup');
  }

  render() {
    const error = this.state.invalidData ?
      <span className="error"> Invalid login or password</span> :
      '';
    return (
      <div className="signin-page" onKeyUp={this.handleKeUp}>
        <div className="auth-body"></div>
        <div className="grad"></div>
        <div className="header">
          <div>Mercury<span>Signin</span></div><br/>
          <span>Don't have an account?
            <a onClick={this.signupRedirect}>
              Sign Up
            </a>
          </span>
        </div>
        <br/>
        <div className="login">
          <input
            ref={(ref) => {
              this.emailInput = ref;
            }}
            type="text"
            placeholder="email"
            name="user"/><br/>
          <input
            ref={(ref) => {
              this.passInput = ref;
            }}
            type="password"
            placeholder="password"
            name="password"/><br/>
          <button onClick={this.handleLogIn}>
            {
              this.state.loading ?
                <PulseLoader loading={true} color={'#a18d6c'} size={10}/> :
                'Login'
            }
          </button><br/>
          {error}
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignIn;
