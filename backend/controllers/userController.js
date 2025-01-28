const User = require("../models/User");

let users = [
  new User(1, "John", "Doe", "john@example.com", "IT")
];

exports.getUsers = (req, res) => res.json(users);

exports.addUser = (req, res) => {
  const { firstName, lastName, email, department } = req.body;
  const newUser = new User(Date.now(), firstName, lastName, email, department);
  users.push(newUser);
  res.json(newUser);
};

exports.updateUser = (req, res) => {
  users = users.map(user =>
    user.id == req.params.id ? { ...user, ...req.body } : user
  );
  res.json(users.find(user => user.id == req.params.id));
};

exports.deleteUser = (req, res) => {
  users = users.filter(user => user.id != req.params.id);
  res.json({ message: "User deleted" });
};
