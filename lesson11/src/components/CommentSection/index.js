import React, { useState } from "react";

import Modal from "../Modal";
import CustomInput from "../CustomInput";
import CustomComment from "../CustomComment";

function CommentSection() {
  const [showModal, toggleModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const [submit, setSubmit] = useState([]);

  function handleSubmit() {
    toggleModal((prev) => !prev);
    setSubmit((prev) => [
      ...prev,
      { id: prev.length + 1, name, email, comment },
    ]);
    setName("");
    setEmail("");
    setComment("");
  }

  return (
    <div className="comment-section">
      <h4>Comment Section</h4>
      <div className="comment-content">
        <button
          className="button--primary"
          onClick={() => toggleModal((prev) => !prev)}
        >
          Add Comment
        </button>
        {showModal && (
          <Modal>
            <CustomInput
              label="Name"
              name="name"
              type="text"
              value={name}
              setValue={setName}
            />
            <CustomInput
              label="Email"
              name="email"
              type="text"
              value={email}
              setValue={setEmail}
            />
            <CustomInput
              label="Comment"
              name="comment"
              type="text"
              value={comment}
              setValue={setComment}
            />
            <div className="form-buttons">
              <button
                className="button--primary"
                onClick={() => toggleModal((prev) => !prev)}
              >
                Close
              </button>
              <button onClick={handleSubmit} className="button--primary">
                Submit
              </button>
            </div>
          </Modal>
        )}
        {submit.length && <CustomComment submit={submit} />}
      </div>
    </div>
  );
}

export default CommentSection;
