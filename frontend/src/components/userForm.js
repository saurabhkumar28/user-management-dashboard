import React, { useState, useEffect } from "react";
import { addUser, updateUser } from "../services/userService";

const UserForm = ({ selectedUser, onSave }) => {
  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", department: "" });
  useEffect(() => { selectedUser ? setUser(selectedUser) : setUser({ firstName: "", lastName: "", email: "", department: "" }); }, [selectedUser]);
  const handleChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    selectedUser ? updateUser(selectedUser.id, user).then(onSave) : addUser(user).then(onSave);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" value={user.firstName} onChange={handleChange} placeholder="First Name" required />
      <input name="lastName" value={user.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input name="department" value={user.department} onChange={handleChange} placeholder="Department" required />
      <button type="submit">{selectedUser ? "Update" : "Add"} User</button>
    </form>
  );
};
export default UserForm;
