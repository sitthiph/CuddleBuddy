
-- TODO: REMOVE DROP DATABASE LINE AFTER EVERYTHING IS FINALIZE
DROP DATABASE IF EXISTS cuddlebuddy_db;
CREATE DATABASE cuddlebuddy_db;

USE cuddlebuddy_db;

CREATE TABLE user_table(
user_id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(255) NOT NULL,
last_name VARCHAR(255) NOT NULL,
gender BOOLEAN NOT NULL,
date_of_birth DATE NOT NULL,
email VARCHAR(255) NOT NULL,
pic_path VARCHAR(255) NOT NULL,
user_description VARCHAR(255) NOT NULL,
PRIMARY KEY (user_id)
);

CREATE TABLE chat_table(
sender_id INT NOT NULL,
message VARCHAR(255) NOT NULL,
receiver_id INT NOT NULL
);

CREATE TABLE matched_table(
user_id_1 INT NOT NULL,
user_id_2 INT NOT NULL
);
