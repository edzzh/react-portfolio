import React from "react";

const CommentList = ({ comments }) => {
  const sortedCommentList = comments.sort((a,b) => {
    let dateA = new Date(a.timestamp);
    let dateB = new Date(b.timestamp);

    return dateB.getTime() - dateA.getTime();
  });

  if (comments.length === 0) {
    return <div>No Comments Found...</div>;
  }

  return sortedCommentList.map(comment => {
    return (
      <div className="comment" key={comment.key}>
        <div className="content">
          <span className="author">{comment.username}</span>
          <div className="metadata">
            <span className="date">{comment.timestamp}</span>
          </div>
          <div className="text">
            {comment.comment}
          </div>
        </div>
      </div>
    );
  });
};

export default CommentList;
