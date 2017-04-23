var connection = require('../db');


module.exports = {
  messages: {
    get: function (room) {
      // select stuff from table messages
      // query returns a promise
      return connection.queryAsync(
        `SELECT messages.message, rooms.roomname, users.username from (messages 
        INNER JOIN rooms ON messages.message_room_id=rooms.room_id 
        INNER JOIN users ON messages.message_user_id=users.user_id)`
        );
    }, // a function which produces all the messages
    post: function (body) {
      // body.message, body.username, body.roomname

      return connection.queryAsync(`
        INSERT INTO rooms (roomname) 
        SELECT * from (SELECT '${body.room}') as tmp
        WHERE NOT EXISTS 
        (SELECT roomname from rooms WHERE roomname = '${body.room}') limit 1;
      `)
      .then(connection.queryAsync(`
        INSERT INTO users (username) 
        SELECT * from (SELECT '${body.username}') as tmp
        WHERE NOT EXISTS
        (SELECT username from users WHERE username = '${body.username}') limit 1;  
        `))
      .then(connection.queryAsync(`
        INSERT INTO messages (message, message_room_id, message_user_id) VALUES
        ('${body.message}', 
        (SELECT room_id from rooms WHERE roomname='${body.roomname}'), 
        (SELECT user_id from users WHERE username='${body.username}')
        );  
        `));

      //insert stuff into db table messages
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


