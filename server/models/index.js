var query = require('../db');

module.exports = {
  messages: {
    get: function (room) {
      //select stuff from table messages
      // query returns a promise
      return query();
    }, // a function which produces all the messages
    post: function () {
      //insert stuff into db table messages
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

