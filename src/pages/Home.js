import React, { useEffect, useState } from "react";
import PostList from "../components/PostList";
import Pagination from "../components/Pagination";
import SearchBar from "../components/SearchBar";
import UserFilter from "../components/UserFilter";
import "../styles/pages/Home.css";

const POSTS_PER_PAGE = 10;

function Home() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setFilteredPosts(data);
      });
  }, []);

  useEffect(() => {
    let temp = posts;
    if (userId) temp = temp.filter(p => p.userId === Number(userId));
    if (searchTerm)
      temp = temp.filter(
        p =>
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.body.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFilteredPosts(temp);
    setCurrentPage(1);
  }, [searchTerm, userId, posts]);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  return (
    <div className="home-container">
      <div className="home-controls">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <UserFilter setUserId={setUserId} />
      </div>

      <PostList posts={currentPosts} />
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredPosts.length / POSTS_PER_PAGE)}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
