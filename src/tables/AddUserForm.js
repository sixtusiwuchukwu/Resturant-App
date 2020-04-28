import React, { useState } from "react";

const AddUserForm = props => {
  const initialFormState = {
    id: null,
    name: "",
    Username: ""
  };
  const [user, setUser] = useState(initialFormState);

  const handleInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (user.name && user.Username) {
        setUser(initialFormState);
        return props.addUser(user)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInput} />
      <label>Username</label>
      <input
        type="text"
        name="Username"
        value={user.Username}
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Add</button>
    </form>
  );
};

export default AddUserForm;
