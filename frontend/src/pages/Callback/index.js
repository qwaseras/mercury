import React, {Component} from 'react';

import {setAccessToken, setIdToken} from '../../common/utils/auth';

export default class extends Component {
  componentDidMount() {
    setAccessToken();
    setIdToken();
    this.props.history.push('/');
  }
  render() {
    return <div>REDIRECTING...</div>;
  }
}
