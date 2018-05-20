import React, {Component} from 'react';
import {PulseLoader} from 'react-spinners';
import {signup, login} from '../../common/utils/auth';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: {},
    };
  }
  handleSignUp = () => {
    this.setState({loading: true});
    const email = this.emailInput.value;
    const pass = this.passInput.value;
    signup(
      this.firstNameInput.value,
      this.lastNameInput.value,
      this.emailInput.value,
      this.nicknameInput.value,
      this.passInput.value,
      this.passConfirmInput.value
    ).then( async () => {
      await login(email, pass);
      this.props.history.push('/');
    }).catch( (response) => {
      this.setState({
        error: Object.assign({}, response.response.data.error),
        loading: false,
      });
    });
  }

  handleKeUp = (e) => {
    if (e.key === 'Enter') {
      this.handleSignUp();
    }
  }

  signinRedirect = () => {
    this.props.history.push('/signin');
  }

  render() {
    const error = this.state.error;
    return (
      <div className="signup-page" onKeyUp={this.handleKeUp}>
        <div className="auth-body"></div>
        <div className="grad"></div>
        <div className="header">
          <div>Mercury<span>Signup</span></div><br/>
          <span>Have an account?
            <a onClick={this.signinRedirect}>
                Sign In
            </a>
          </span>
        </div>
        <br/>
        <div className="login">
          <input
            ref={(ref) => {
              this.firstNameInput = ref;
            }}
            type="text"
            placeholder="first name"
            name="user"/>
          <span className="error">
            {error.email ? error.email[0] : ''}
          </span><br/>
          <input
            ref={(ref) => {
              this.lastNameInput = ref;
            }}
            type="text"
            placeholder="last name"
            name="user"/>
          <span className="error">
            {error.email ? error.email[0] : ''}
          </span><br/>
          <input
            ref={(ref) => {
              this.emailInput = ref;
            }}
            type="text"
            placeholder="email"
            name="user"/>
          <span className="error">
            {error.email ? error.email[0] : ''}
          </span><br/>
          <input
            ref={(ref) => {
              this.nicknameInput = ref;
            }}
            type="text"
            placeholder="nickname"
            name="user"
            maxlength="20"/>
          <span className="error">
            {error.nickname ? error.nickname[0] : ''}
          </span><br/>
          <input
            ref={(ref) => {
              this.passInput = ref;
            }}
            type="password"
            placeholder="password"
            name="password"/>
          <span className="error">
            {error.password ? error.password[0] : ''}
          </span><br/>
          <input
            ref={(ref) => {
              this.passConfirmInput = ref;
            }}
            type="password"
            placeholder="password confirmation"
            name="password confirmation"/>
          <span className="error">
            {error.password_confirmation ?
              error.password_confirmation[0] : ''}
          </span><br/>
          <button onClick={this.handleSignUp}>
            {
              this.state.loading ?
                <PulseLoader loading={true} color={'#a18d6c'} size={10}/> :
                'Create an account'
            }
          </button><br/>
          <div>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
