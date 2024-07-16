-- uses a password encoder so specify noop

INSERT INTO users (username, password, enabled) VALUES
    ('BraveLion', '{noop}Brave#1234', true)
    ON CONFLICT (username) DO NOTHING;

INSERT INTO users (username, password, enabled) VALUES
    ('WiseOwl', '{noop}Wise!5678', true)
    ON CONFLICT (username) DO NOTHING;

INSERT INTO users (username, password, enabled) VALUES
    ('CalmTurtle', '{noop}Calm#91011', true)
    ON CONFLICT (username) DO NOTHING;

INSERT INTO users (username, password, enabled) VALUES
    ('BoldEagle', '{noop}Bold$1213', true)
    ON CONFLICT (username) DO NOTHING;


INSERT INTO authorities (username, authority) VALUES
    ('BraveLion', 'ROLE_USER')
    ON CONFLICT (username, authority) DO NOTHING;

INSERT INTO authorities (username, authority) VALUES
    ('WiseOwl', 'ROLE_USER')
    ON CONFLICT (username, authority) DO NOTHING;

INSERT INTO authorities (username, authority) VALUES
    ('CalmTurtle', 'ROLE_USER')
    ON CONFLICT (username, authority) DO NOTHING;

INSERT INTO authorities (username, authority) VALUES
    ('BoldEagle', 'ROLE_USER')
    ON CONFLICT (username, authority) DO NOTHING;

/*
-- Insert 10 example posts
INSERT INTO "post" ("id", "username", "text", "date", "likes", "body_image_id") VALUES
                                                                   (nextval('post_seq'), 'renny', 'Enjoying the beautiful weather today!', '2024-07-01T17:15:00.000Z', 15, 1),
                                                                   (nextval('post_seq'), 'BraveLion', 'Just completed a 10k run!', '2024-07-01T17:16:00.000Z', 25, 1),
                                                                   (nextval('post_seq'), 'WiseOwl', 'Reading an interesting book on AI.', '2024-07-01T17:17:00.000Z', 30, 1),
                                                                   (nextval('post_seq'), 'CalmTurtle', 'Meditation session this morning was fantastic.', '2024-07-01T17:18:00.000Z', 20, 2),
                                                                   (nextval('post_seq'), 'BoldEagle', 'Flying high above the mountains!', '2024-07-01T17:19:00.000Z', 40, 3);
INSERT INTO "post" ("id", "username", "text", "date", "likes") VALUES
                                                                   (nextval('post_seq'), 'renny', 'Had a great time with friends.', '2024-07-01T17:20:00.000Z', 10),
                                                                   (nextval('post_seq'), 'BraveLion', 'Started a new fitness routine.', '2024-07-01T17:21:00.000Z', 5),
                                                                   (nextval('post_seq'), 'WiseOwl', 'Learning new coding techniques.', '2024-07-01T17:22:00.000Z', 12),
                                                                   (nextval('post_seq'), 'CalmTurtle', 'Yoga poses to start the day.', '2024-07-01T17:23:00.000Z', 8),
                                                                   (nextval('post_seq'), 'BoldEagle', 'Adventure awaits!', '2024-07-01T17:24:00.000Z', 35);*/
