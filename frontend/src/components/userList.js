import React, { useEffect, useState } from "react";
import { getUsers, deleteUser } from "../services/userService";

const UserList = ({ onEdit }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => { getUsers().then(res => setUsers(res.data)); }, []);
  const handleDelete = id => { deleteUser(id).then(() => setUsers(users.filter(user => user.id !== id))); };
  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.firstName} {user.lastName} ({user.email}) - {user.department}
            <button onClick={() => onEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserList;