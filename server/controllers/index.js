var models = require('../models');
var Promise = require('bluebird');
var request = require('request');

Promise.promisifyAll(request);

// let headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10,
//   'Content-Type': 'application/json' // Seconds.
//   };
  // res.header("Access-Control-Allow-Origin", "*");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

module.exports = {
  messages: {
    get: function (req, res) {
      //res.set(headers);
      var currentRoom = models.messages.get(req.query.room);
      currentRoom.then((data) => res.send(data));
    }, 
    post: function (req, res) {
      // res.set(headers);
      var currentRoom = models.messages.post(req.body);
      currentRoom.then(() => res.send());
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      // res.set(headers);
      // addHeaders(res);
      // var currentUser = models.messages.get(req.query.user);
      // currentUser.then((data) => res.send(data));
    },
    post: function (req, res) {
      // addHeaders(res);

    }
  }
};

