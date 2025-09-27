import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CommentList from "../components/CommentList";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(setPost);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then(res => res.json())
      .then(setComments);
  }, [id]);

  if (!post) return <p>Cargando...</p>;

  return (
    <div style={{ padding: "15px" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <h3>Comentarios</h3>
      <CommentList comments={comments} />

      <Link to="/" style={{ display: "inline-block", marginTop: "10px", color: "blue" }}>
        ⬅ Volver
      </Link>
    </div>
  );
}

export default PostDetails;
