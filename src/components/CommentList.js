import React from "react";
import "../styles/CommentList.css";

function CommentList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map(c => (
        <div key={c.id} className="comment-item">
          <strong>{c.name} ({c.email})</strong>
          <p>{c.body}</p>
        </div>
      ))}
    </div>
  );
}

export default CommentList;
