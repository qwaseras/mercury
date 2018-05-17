import React, { Component } from 'react';

import {login} from '../../common/utils/auth'

class SignIn extends Component{

	signin = async () => {
		await login('admin@mercury.com', 'admin123')
		this.props.history.push('/')
	}

	render(){
		return(
			<div>
				<a onClick={this.signin}>SignIn</a>
			</div>
		)
	}
}

export default SignIn;
