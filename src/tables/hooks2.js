import React, { useState } from "react";
import { UserTable } from "./UserTable";
import AddUserForm from "./AddUserForm";
import { EditUserForm } from "./editForm";

const Tan = props => {
  const usersData = [
    // { id: 1, name: "ola", Username: "hola" },
    // { id: 2, name: "mide", Username: "olamie's" },
    // { id: 3, name: "Temi", Username: "Adeyi" }
  ];
  const formState = { id: null, name: "", Username: "" };

  const [users, setUsers] = useState(usersData);
  const [edit, setEdit] = useState(false);
  const [currentUser, setCurrentUser] = useState(formState);

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };
  const deleteUser = id => {
    setEdit(false);
    setUsers(users.filter(user => user.id !== id));
  };
  const editUser = user => {
    setEdit(true);
    setCurrentUser({ id: user.id, name: user.name, Username: user.Username });
  };
  const updateUser = (id, updatedUser) => {
    setEdit(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {edit ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                edit={edit}
                setEdit={setEdit}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable
            users={users}
            deleteUser={deleteUser}
            editUser={editUser}
          />
        </div>
      </div>
    </div>
  );
};

export default Tan;
