import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Layout/Header';
import {
  loadBlog,
} from './actions';

class BlogPage extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;
    this.props.actions.loadBlog(id);
  }
  render() {
    const {
      blog,
      pages,
    } = this.props;
    return (
      <div>
        <Header
          history={this.props.history}
          hideImg={true}
          loadUser={this.handleUserLoad}
        />
        <div className="container">
          <h2>{blog.title}</h2>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.blog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadBlog,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);
