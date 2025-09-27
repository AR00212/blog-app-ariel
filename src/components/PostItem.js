import React from "react";
import { Link } from "react-router-dom";
import "../styles/PostItem.css";

function PostItem({ post }) {
  if (!post) return null;

  return (
    <div className="post-item">
      <h3>{post.title}</h3>
      <p>{post.body.slice(0, 80)}...</p>
      <Link to={`/posts/${post.id}`}>Ver más</Link>
    </div>
  );
}

export default PostItem;
