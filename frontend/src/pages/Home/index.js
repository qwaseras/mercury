import React, {Component} from 'react';

import Header from '../../components/Layout/Header';
import api from '../../common/utils/http';

export default class extends Component {
  componentWillMount (){
    api.get('home/index')
      .then(function (response) {
          return response.data
      })
      .catch(function (error) {
          return error.response.data
      })
  }
  render() {
    return (
      <div>
        <Header/>
        <p>HOME</p>
        <button onClick={() => this.props.history.push('/dashboard')}>
          { }
        </button>
      </div>
    );
  }
}
