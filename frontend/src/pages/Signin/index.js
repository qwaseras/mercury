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
      this.loginInput.value,
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

  render() {
    const error = this.state.invalidData ?
      <span className="login-error"> Invalid login or password</span> :
      '';
    return (
      <div className="login-page" onKeyUp={this.handleKeUp}>
        <div className="auth-body"></div>
        <div className="grad"></div>
        <div className="header">
          <div>Mercury<span>Login</span></div>
        </div>
        <br/>
        <div className="login">
          <input
            ref={(ref) => {
              this.loginInput = ref;
            }}
            type="text"
            placeholder="username"
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
