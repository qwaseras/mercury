import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Layout/Header';
import Editor from '../../components/AddBlogPage/Editor';
import {getUserId} from '../../common/utils/auth';

import {
  loadBlog,
  setPageContent,
  createPage,
} from './actions';

class AddBlogPage extends Component {
  async componentWillMount() {
    const id = this.props.match.params.blogId;
    await this.props.actions.loadBlog(id);
    if (getUserId() !== this.props.blog.user_id) {
      this.props.history.goBack();
    };
  }
  handlePageCreate = async () => {
    await this.props.actions.createPage();
    this.props.history.goBack();
  }
  render() {
    const {
      actions: {
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
          <input type="text" id="page-title" placeholder="Enter page title"/>
          <Editor
            id="editor"
            onEditorChange={setPageContent}
          />
          <button className="btn add-page" onClick={() => this.props.history.goBack()}>Cancel</button>
          <button className="btn add-page" onClick={() => this.handlePageCreate()}>Save</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.addBlogPage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        loadBlog,
        setPageContent,
        createPage,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlogPage);
