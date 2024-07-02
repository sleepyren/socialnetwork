CREATE TABLE IF NOT EXISTS users (
    username VARCHAR(50) NOT NULL PRIMARY KEY,
    password VARCHAR(100) NOT NULL,
    enabled BOOLEAN NOT NULL
    );

CREATE TABLE IF NOT EXISTS authorities (
                                           username VARCHAR(50) NOT NULL,
    authority VARCHAR(50) NOT NULL,
    FOREIGN KEY (username) REFERENCES users (username)
    );

CREATE UNIQUE INDEX IF NOT EXISTS ix_auth_username_authority
    ON authorities (username, authority);

CREATE UNIQUE INDEX IF NOT EXISTS profile_img_username ON image (profile_image_of) WHERE profile_image_of
    IS NOT NULL;

CREATE INDEX IF NOT EXISTS posts_of_user ON post (username);