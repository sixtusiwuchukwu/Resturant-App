import React, { useState, useEffect } from "react";

export const EditUserForm = props => {
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {
    setUser(props.currentUser)  
}, [props]);

  const handleInput = e => {
    const { name, value } = e.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        props.updateUser(user.id, user);
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInput} />
      <label>Username</label>
      <input type="text" name="Username" value={user.Username} onChange={handleInput} />
      <button>Update</button>
      <button
        className="button muted-button"
        onClick={() => props.setEdit(false)}
      >
        Cancel
      </button>
    </form>
  );
};
