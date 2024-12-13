const fs = require("fs");

const usersData = fs.readFileSync(`${__dirname}/json/users.json`);

const usersOBJ = JSON.parse(usersData);
let usersName = [];
let amountOfUsers = 0;
usersOBJ.users.forEach((user) => {
  amountOfUsers++;
  usersName.push(user.name);
});
// We need to convert both outputs to Strings as they wont work
// on regular Types
amountOfUsers = "Amount of users are:\n" + amountOfUsers.toString();
usersName = "Users name are :\n" + usersName.join("\n").toString();

// Write both answers to new TXT Files
fs.writeFileSync(`${__dirname}/texts/users_count.txt`, amountOfUsers);
fs.writeFileSync(`${__dirname}/texts/users_name.txt`, usersName);
