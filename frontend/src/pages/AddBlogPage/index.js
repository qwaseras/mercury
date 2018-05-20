import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Layout/Header';
import Editor from '../../components/AddBlogPage/Editor';
import APIConfig from '../../common/utils/APIConfig';
import {
  setBlogId,
  setPageContent,
  createPage,
} from './actions';

class AddBlogPage extends Component {
  componentWillMount() {
    const id = this.props.match.params.blogId;
    id ? this.props.actions.setBlogId(id) : this.props.history.goBack();
  }
  handlePageCreate = async () => {
    await this.props.actions.createPage();
    this.props.history.goBack();
  }
  render() {
    const {
      pageContent,
      actions: {
        createPage,
        setPageContent,
      },
    } = this.props;
    return (
      <div>
        <Header
          history={this.props.history}
          hideImg={true}
          loadUser={this.handleUserLoad}
        />
        <div className="container">
          <a onClick={() => this.handlePageCreate()}>add page</a>
          <Editor
            id="editor"
            onEditorChange={this.props.actions.setPageContent}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.blogPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        setBlogId,
        setPageContent,
        createPage,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogPage);
