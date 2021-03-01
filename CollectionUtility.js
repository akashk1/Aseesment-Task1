const Users = require("./Models/Users");
const Agent = require("./Models/Agent");
const Policy = require("./Models/PolicyInfo");
const LOB = require("./Models/LOB");
const UserAccounts = require("./Models/UserAccount");
const Carrier = require("./Models/Carrier");

const insertAllJsonData = (workerData) => {
  return new Promise((resolve, reject) => {
    Users.collection.insertMany(workerData.usersData, (err, res) => {
      if (err) console.log("err");
      else console.log("success");
    });
    Agent.collection.insertMany(workerData.agent, (err, res) => {
      if (err) console.log("err");
      else console.log("success");
    });
    LOB.collection.insertMany(workerData.LOB, (err, res) => {
      if (err) console.log("err");
      else console.log("success");
    });
    Carrier.collection.insertMany(workerData.carrier, (err, res) => {
      if (err) console.log("err");
      else console.log("success");
    });
    UserAccounts.collection.insertMany(workerData.usersAccount, (err, res) => {
      if (err) console.log("err");
      else console.log("success");
    });
    Policy.collection.insertMany(workerData.policy, (err, res) => {
      if (err) {
        console.log("err");
        reject(err);
      } else {
        console.log("success");
        resolve("success");
      }
    });
  });
};

module.exports = insertAllJsonData;
