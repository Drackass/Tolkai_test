# Conversations API Documentation

## Base URL

```
http://localhost:5000
```

## Create a Conversation

### Request

- **Endpoint:** `POST /conversations`
- **Description:** Create a new conversation.
- **Request Body:**
  - `user_id` (integer): User ID.
  - `assistant_id` (integer): Assistant/Bot ID.
  - `title` (string): Conversation title.

```json
{
  "user_id": 1,
  "assistant_id": 2,
  "title": "Sample Conversation"
}
```

### Response

- **Status Code:** 200 OK
- **Response Body:**
  - `conversation_id` (integer): ID of the created conversation.
  - `user_id` (integer): User ID.
  - `assistant_id` (integer): Assistant/Bot ID.
  - `title` (string): Conversation title.
  - `timestamp` (timestamp): Timestamp of the conversation creation.

```json
{
  "conversation_id": 1,
  "user_id": 1,
  "assistant_id": 2,
  "title": "Sample Conversation",
  "timestamp": "2023-12-13T12:34:56Z"
}
```

## Get 20 Recent Conversations

### Request

- **Endpoint:** `GET /conversations`
- **Description:** Get the 20 most recent conversations.

### Response

- **Status Code:** 200 OK
- **Response Body:**
  - List of conversations with the same structure as the create conversation response.

```json
[
  {
    "conversation_id": 1,
    "user_id": 1,
    "assistant_id": 2,
    "title": "Sample Conversation",
    "timestamp": "2023-12-13T12:34:56Z"
  },
  // ... (up to 20 conversations)
]
```

## Get Conversation Details

### Request

- **Endpoint:** `GET /conversations/:id`
- **Description:** Get details of a specific conversation.
- **URL Parameters:**
    - `id` (integer): Conversation ID.

### Response

- **Status Code:** 200 OK
- **Response Body:**
  - Details of the conversation.

```json
{
  "conversation_id": 1,
  "title": "Sample Conversation",
  "user_id": 1,
  "bot_id": 2,
  "user_name": "User123",
  "bot_name": "Bot456",
  "message_count": 5,
  "conversation_date": "2023-12-13T12:34:56Z"
}
```

## Get Messages from a Conversation

### Request

- **Endpoint:** `GET /conversations/:id/messages`
- **Description:** Get all messages from a specific conversation.
- **URL Parameters:**
    - `id` (integer): Conversation ID.

### Response

- **Status Code:** 200 OK
- **Response Body:**
  - List of messages in the conversation.

```json
[
  {
    "message_id": 1,
    "conversation_id": 1,
    "author_id": 1,
    "content": "Hello, how are you?",
    "timestamp": "2023-12-13T12:34:56Z",
    "author": "User123"
  },
  // ... (other messages)
]
```

## Get Message Count from a Conversation

### Request

- **Endpoint:** `GET /conversations/:id/messages/count`
- **Description:** Get the count of messages in a specific conversation.
- **URL Parameters:**
    - `id` (integer): Conversation ID.

### Response

- **Status Code:** 200 OK
- **Response Body:**
  - Number of messages in the conversation.

```json
{
  "count": 5
}
```