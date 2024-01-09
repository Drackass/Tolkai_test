CREATE DATABASE tolkai;

-- Table: Users
CREATE TABLE Users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL
);

-- Table: Conversations
CREATE TABLE Conversations (
    conversation_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES Users(user_id),
    assistant_id INT REFERENCES Users(user_id),
    title VARCHAR(255),
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Table: Messages
CREATE TABLE Messages (
    message_id SERIAL PRIMARY KEY,
    conversation_id INT REFERENCES Conversations(conversation_id),
    author_id INT REFERENCES Users(user_id),
    content TEXT,
    timestamp TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Sample data for Users
INSERT INTO Users (username) VALUES
    ('user'),
    ('bot');

-- Sample data for Conversations
INSERT INTO Conversations (user_id, assistant_id,title) VALUES
    (1,2,'Lorem ipsum dolor sit amet'),
    (1,2,'Consectetur adipiscing elit'),
    (1,2,'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'),
    (1,2,'Ut enim ad minim veniam'),
    (1,2,'Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'),
    (1,2,'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur'),
    (1,2,'Excepteur sint occaecat cupidatat non proident'),
    (1,2,'Sunt in culpa qui officia deserunt mollit anim id est laborum');

-- Sample data for Messages
INSERT INTO Messages (conversation_id, author_id, content) VALUES
    (3, 1, 'dimanche');

    INSERT INTO Messages (conversation_id, author_id, content) VALUES
    (65, 1, 'dimanche');
