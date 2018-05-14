import React, {Component} from 'react';

import Header from '../../components/Layout/Header';
import api from '../../common/utils/http';

export default class extends Component {
  componentWillMount (){
  }
  render() {
    return (
      <div>
        <Header/>
        <p>HOME</p>
        <button onClick={() => this.props.history.push('/dashboard')}>
        </button>
      </div>
    );
  }
}
