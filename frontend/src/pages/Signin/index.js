import React, { Component } from 'react';

import {login} from '../../common/utils/auth'

class SignIn extends Component{
	
	signin = () => {
		login('admin@mercury.com', 'admin123')
	}

	render(){
		return(
			<div>
				<a onClick={this.signin}>asfafafasf</a>
			</div>
		)
	}
}

export default SignIn;