const express = require("express");
const router = express.Router();
const Policy = require("../Models/PolicyInfo");
const Users = require("../Models/Users");
const utilMethods = require("../dataConverter");
router.get("/getByname/:firstname", (req, res, next) => {
  const search = { firstname: req.params.firstname };
  console.log(search);
  Users.find(search, (err, user) => {
    if (err) {
      return res.status(200).json({
        title: "An error occured",
        error: err,
        success: false,
      });
    }

    Policy.find({ user_id: user[0].userId }, (err, data) => {
      if (err) {
        return res.status(200).json({
          title: "data not found",
          error: err,
          success: false,
        });
      }
      return res.status(200).json({
        policy: data,
        user: user,
        success: true,
      });
    });
  });
});

router.get("/getByEmail/:email", (req, res, next) => {
  const search = { email: req.params.email };
  console.log(search);
  Users.find(search, (err, user) => {
    if (err) {
      return res.status(200).json({
        title: "An error occured",
        error: err,
        success: false,
      });
    }

    Policy.find({ user_id: user[0].userId }, (err, data) => {
      if (err) {
        return res.status(200).json({
          title: "data not found",
          error: err,
          success: false,
        });
      }
      return res.status(200).json({
        policy: data,
        user: user,
        success: true,
      });
    });
  });
});

router.get("/getAll", (req, res, next) => {
  Users.find({}, (err, users) => {
    if (!err) {
      Policy.find({}, (error, policies) => {
        if (!error) {
          let result = [];
          for (let i = 0; i < users.length; i++) {
            const user = utilMethods.fetchUserData(
              users[i],
              users[i]["userId"]
            );
            const policy = utilMethods.fetchPolicyData(
              policies[i],
              policies[i]["id"]
            );
            const data = { ...user, ...policy };
            result.push(data);
          }
          return res.status(200).json({
            data: result,
            success: true,
          });
        }
      });
    }
  });
});

module.exports = router;
