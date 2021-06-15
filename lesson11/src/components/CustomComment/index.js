import React from "react";

function CustomComment({ submit }) {
  return submit.map((value) => (
    <div key={value.id} className="comment-box">
      <span className="comment--name">user <span className="comment--name--user">{value.name}</span> says:</span>
      <span className="comment--email">user email ({value.email})</span>
      <span className="comment--comment">{value.comment}</span>
    </div>
  ));
}

export default CustomComment;
