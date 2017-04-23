DROP DATABASE IF EXISTS `chat`;
CREATE DATABASE chat;

USE chat;



/* Create other tables and define schemas for them here! */

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
-- 
-- ---

DROP TABLE IF EXISTS `users`;
    
CREATE TABLE `users` (
  `user_id` INTEGER NOT NULL AUTO_INCREMENT,
  `username` MEDIUMTEXT NOT NULL,
  `user_current_room` INTEGER DEFAULT 1,
  PRIMARY KEY (`user_id`)
);

-- ---
-- Table 'rooms'
-- 
-- ---

DROP TABLE IF EXISTS `rooms`;
    
CREATE TABLE `rooms` (
  `room_id` INTEGER NOT NULL AUTO_INCREMENT,
  `roomname` MEDIUMTEXT NULL,
  PRIMARY KEY (`room_id`)
);

-- ---
-- Table 'messages'
-- 
-- ---
DROP TABLE IF EXISTS `messages`;
    
CREATE TABLE messages ( 
  `message_id` INTEGER NOT NULL AUTO_INCREMENT, 
  `message` MEDIUMTEXT,
  `message_room_id` INTEGER DEFAULT 1, 
  `message_user_id` INTEGER NOT NULL,
  PRIMARY KEY ( `message_id` ) 
);


-- ---
-- Table 'room_messages'
-- 
-- ---
-- ---
-- Foreign Keys 
-- ---

-- ALTER TABLE `users` ADD FOREIGN KEY (user_current_room) REFERENCES `rooms` (`room_id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (message_room_id) REFERENCES `rooms` (`room_id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (message_user_id) REFERENCES `users` (`user_id`);

-- ---
-- Table Properties
-- ---

-- Select message with text for roomname and username
-- select messages.message, rooms.name, users.name from 
-- (messages INNER JOIN rooms ON messages.in_room=rooms.id 
-- INNER JOIN users ON messages.user = users.id);

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `room_messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `user_messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---
INSERT INTO `rooms` (`room_id`,`roomname`) VALUES
(1,'lobby'), (2, 'otherRoom');
INSERT INTO `users` (`user_id`,`username`,`user_current_room`) VALUES
(1,'superuser', 1);
INSERT INTO `messages` (`message_id`,`message`,`message_room_id`,`message_user_id`) VALUES
(1,'hello world', 1, 1), (2, 'victory', 1, 1), (3, 'message in other room', 2, 1);
