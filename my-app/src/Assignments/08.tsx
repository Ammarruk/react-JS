//Assignment 08
// Assignment: Create a UserList Component to Display Users from Dummy API

import { useState } from "react";

interface Post {
  userId: number;
  id: number;   
  title: string;
  body: string;
}

const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    console.log(response);
    const postsData: Post[] = await response.json();
    setPosts(postsData);
  };

  return (
    <div className="container">
      <h1 className="text-primary fw-bold">Post List</h1>
      <button className="btn btn-primary" onClick={fetchPosts}>
        Load Posts
      </button>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item" key={post.id}>
            {post.title} <br />
            <span className="small text-secondary">{post.body}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
