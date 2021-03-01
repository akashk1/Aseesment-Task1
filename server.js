const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require("worker_threads");
const csv = require("csv-parser");
var os = require("os-utils");
const utilMethods = require("./dataConverter");
const fs = require("fs");
const express = require("express");

const connection = require("./Connection");
const insertInDb = require("./CollectionUtility");
const userRoutes = require("./Routes/routes");
const usersData = [];
const policyInfo = [];
const agent = [];
const users_Account = [];
const LOB = [];
const carrier = [];
let i = 0;
const app = express();

setInterval(() => {
  os.cpuUsage((v) => {
    if (v > 70) {
      process.exit();
    }
  });
}, 1000);
if (isMainThread) {
  fs.createReadStream("./input.csv")
    .pipe(csv())
    .on("data", (data) => {
      const userAccountData = utilMethods.fetchUsersAccount(data, i);
      users_Account.push(userAccountData);
      const userData = utilMethods.fetchUserData(data, i);
      usersData.push(userData);
      const agentData = utilMethods.fetchAgentData(data, i);
      agent.push(agentData);
      const lob = utilMethods.fetchLobData(data, i);
      LOB.push(lob);
      const carrierData = utilMethods.fetchCarrierData(data, i);
      carrier.push(carrierData);
      const policyData = utilMethods.fetchPolicyData(data, i);
      policyInfo.push(policyData);
      i++;
    })
    .on("end", () => {
      app.use(express.json());
      app.use("/", userRoutes);

      const port = process.env.PORT || 5000;
      app.listen(port, (req, res) => {
        console.log(`Running in port ${port} `);
      });

      const data = {
        usersAccount: users_Account,
        agent: agent,
        LOB: LOB,
        usersData: usersData,
        policy: policyInfo,
        carrier: carrier,
      };

      const worker = new Worker(__filename, { workerData: data });
      worker.on("message", (value) => {
        if (value.completed) {
          console.log(worker.threadId);
          worker.terminate();
          connection.once("open", () => {
            console.log("mongodb connection is established", "main thread");
          });
          worker.on("exit", (code) => {
            console.log(
              `code for exit is ${code} and main thread ${isMainThread}`
            );
          });
        }
      });
    });
} else {
  connection
    .dropDatabase()
    .then((res) => {
      console.log("database dropped");
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      insertInDb(workerData).then(() => {
        parentPort.postMessage({ completed: true });
      });
    });

  parentPort.close();
}
