import React, { useState } from "react";
import UserList from "./components/userList";
import UserForm from "./components/userForm";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const handleSave = () => setSelectedUser(null);
  return (
    <ErrorBoundary>
      <h1>User Management Dashboard</h1>
      <UserForm selectedUser={selectedUser} onSave={handleSave} />
      <UserList onEdit={setSelectedUser} />
    </ErrorBoundary>
  );
};
export default App;
