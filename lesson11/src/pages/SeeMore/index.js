import React, { useContext } from "react";
import { useParams } from "react-router";
import CommentSection from "../../components/CommentSection";
import { AppContext } from "../../context/AppContext";

function SeeMore() {
  const { id } = useParams();
  const { loading, error, posts } = useContext(AppContext);

  return (
    <div className="see-more">
      {loading && <h1>Loading</h1>}
      {error && <h1>{error}</h1>}
      {posts.length && (
        <>
          <h1>{posts[id - 1].title}</h1>
          <div className="post-content">
            <img
              src="https://picsum.photos/seed/picsum/300/400"
              alt="image"
            ></img>
            <span className="post-text">{posts[id - 1].body}</span>
          </div>
          <CommentSection />
        </>
      )}
    </div>
  );
}

export default SeeMore;
