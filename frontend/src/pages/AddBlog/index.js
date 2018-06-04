import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import Header from '../../components/Layout/Header';
import Editor from '../../components/AddBlog/Editor';
import {getUserId} from '../../common/utils/auth';

import {
  createBlog,
} from './actions';

class AddBlog extends Component {
  state = {
    title: '',
    description: '',
  }
  handleBlogCreate = async () => {
    await this.props.actions.createBlog(this.state.title, this.state.description);
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
          <h4> Blog title: </h4>
          <input onChange={(e) => this.setState({title: e.target.value})} type="text" id="page-title"/>
          <h4> Blog description: </h4>
          <Editor
            id="editor"
            onEditorChange={(content) => this.setState({description: content})}
          />
          <button className="btn add-page" onClick={() => this.props.history.goBack()}>Cancel</button>
          <button className="btn add-page" onClick={() => this.handleBlogCreate()}>Create</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.addBlog,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        createBlog,
      },
      dispatch
    ),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBlog);
