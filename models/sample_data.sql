INSERT INTO user_table(first_name, last_name, gender, date_of_birth, email, pic_path, user_description) VALUES
	("Samanan", "Itthiphinyo", 0, "1992-05-01", "saman.itthipq@gmail.com", "FILE_PATH", "hello"),
    ("Mike", "Jackson", 0,  "2012-05-19", "makeq@gmail.com", "FILE_PATH", "LOVE"),
    ("yah", "YeeT", 1,  "2001-05-01", "samaaan.itthipq@gmail.com", "FILE_PATH", "HELLO"),
    ("YAHHH", "YEEEHAW", 1,  "1999-07-15", "itthipq@gmail.com", "FILE_PATH", "COME HERE BB")
;

INSERT INTO matched_table(user_id_1, user_id_2) VALUES
	(1, 2),
    (1, 3),
    (2, 4),
    (2, 3),
    (4, 1)
;

INSERT INTO chat_table(sender_id, message, receiver_id) VALUES
	(1, "Hello?", 2),
	(1, "Can I come over and cuddle?", 2),
	(2, "When?", 1),
	(1, "Right now?", 2),
	(2, "Coming Over!", 1)
;

INSERT INTO pending_table(user_id, pending_id) values
    (1, 3),