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