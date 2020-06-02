import React from "react";
import firebase from "../firebase";

import CommentList from "./CommentList";

class CommentSection extends React.Component {
  constructor() {
    super();
    this.databaseRef = firebase.firestore().collection('comments');
    this.state = {
      username: '',
      comment: '',
      comments: []
    }
  }

  componentDidMount() {
    this.fetchComments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.comment !== this.state.comment) {
      this.fetchComments();
    }
  }

  onChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  onSubmitForm = (e) => {
    e.preventDefault();

    const { username, comment } = this.state;
    const photo_id = this.props.photo.id;
    const timestamp = new Date().toLocaleString();

    if (username !== '' && comment !== '') {
      this.databaseRef.add({
        username,
        comment,
        photo_id,
        timestamp
      }).then(() => {
        this.setState({
          username: '',
          comment: ''
        });
      }).catch((error) => {
        console.error("Error adding document: ", error);
      });
    }
  };

  fetchComments = async () => {
    const comments = [];

    const querySnapshot = await this.databaseRef.get();

    querySnapshot.forEach((doc) => {
      const { username, comment, timestamp, photo_id } = doc.data();

      if (photo_id === this.props.photo.id) {
        comments.push({
          key: doc.id,
          username,
          comment,
          timestamp
        });
      }
    });

    this.setState({ comments });
  };

  render() {
    return (
      <div className="ui comments">
        <form onSubmit={this.onSubmitForm} className="ui reply form">
          <div className="ui input labeled field">
            <div className="ui label black">
              Username:
            </div>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.onChange}
            />
          </div>
          <div className="field">
            <textarea
              name="comment"
              value={this.state.comment}
              onChange={this.onChange}
            />
          </div>
          <button className="ui blue labeled submit icon button">
            <i className="icon edit"/> Add Comment
          </button>
        </form>
        <h3 className="ui dividing header">Comments</h3>

        <CommentList comments={this.state.comments}/>
      </div>
    );
  }
}

export default CommentSection;
