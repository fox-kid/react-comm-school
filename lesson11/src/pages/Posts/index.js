import React, { useContext } from "react";
import Card from "../../components/Card";
import { AppContext } from "../../context/AppContext";

function Posts() {
  const { loading, error, posts } = useContext(AppContext);

  return (
    <div className="card-grid">
      {loading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {posts.length &&
        posts.map((post) => (
          <Card
            title={post.title}
            key={post.id}
            img={"https://picsum.photos/200/300"}
            id={post.id}
          />
        ))}
    </div>
  );
}

export default Posts;
