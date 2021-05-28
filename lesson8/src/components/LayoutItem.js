import React from "react";

let id = 0;

function LayoutItem({ id, firstName, lastName, email, city }) {
  function deleteItem({ id }) {
    console.log({ id }); // ვერ მივანიწე აიდი, თუ მოვიფიქრე რამე, დავურბუნდები ;დ
  }
  return (
    <div className="list-item" id={id}>
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{city}</p>
      <button className="deleteItem" onClick={() => deleteItem({ id })}>
        x
      </button>
    </div>
  );
}
export default LayoutItem;
