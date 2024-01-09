# Conversational Agent Application

## Overview

This repository contains the code for a Conversational Agent Application, developed as part of a technical recruitment test for an alternant/developer position focusing on SaaS Fullstack development. The application is designed to store and retrieve conversations between users and chatbots.

## Table of Contents

- [Functionalities](#functionalities)
- [Results](#results)
- [Technologies Used](#technologies-used)
- [Setup](#setup)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Documentation](#api-documentation)
- [Sources](#sources)

## Functionalities

The application consists of two main parts:

1. **API:**
   - Provides endpoints to retrieve conversations.
   - Allows listing the 20 most recent conversations.
   - Permits fetching all messages belonging to a specific conversation by its ID.

2. **Frontend Application:**
   - Displays the 20 most recent conversations.
   - Allows users to view messages belonging to a specific conversation.

Each conversation includes:
- Conversation ID
- One or more messages (each with a text content)
- Participants (bot and user)
- Number of messages in the conversation
- Conversation date

## Results

The objective of this exercise is to implement a basic version of the application. The following results are expected:

- Documentation for using the API.
- Documentation for running both the API and Frontend projects locally.

## Technologies Used

- **TypeScript**
- **Express**
- **ReactJS**
- **PostgreSQL**

## Setup

### Backend Setup

#### Prerequisites

Make sure you have Node.js and PostgreSQL installed on your machine.

Clone the project from GitHub:

```bash
git clone git@github.com:Drackass/Tolkai_test.git
cd Tolkai_test
```

#### Install dependencies

```bash
cd server
npm install
```

#### Database Configuration

1. Create a PostgreSQL database with the name "tolkai" (or update the db.js file with your preferred name).
2. Copy the contents of db_example.js into a new db.js file in the same directory.
3. Fill in the connection information to your database in the db.js file.

#### Launch the server with file watching

```bash
tsc --watch
node --watch dist/index.js
```

The server should be accessible at http://localhost:5000.

### Frontend Setup

#### Prerequisites

Make sure you have Node.js installed on your machine.

#### Install dependencies

```bash
cd client
npm install
```

#### Run the React application

```bash
npm start
```

The React application should open in your browser at http://localhost:3000.

Your PERN application is now configured. Ensure that the backend server is running with the `node --watch .\server\index.js` command during development.

Adjust paths and commands based on your specific project structure.

## API Documentation

### Base URL

```
http://localhost:5000
```

### Create a Conversation

**Request:**

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

**Response:**

- **Status Code:** 200 OK
- **Response Body:**
  - Details of the created conversation.

```json
{
  "conversation_id": 1,
  "user_id": 1,
  "assistant_id": 2,
  "title": "Sample Conversation",
  "timestamp": "2023-12-13T12:34:56Z"
}
```

For more API documentation, refer to [@API_DOC.md](API_DOC.md).

## Sources

- [PostgreSQL (Postgres) - Installation & Overview |¦| SQL Tutorial |¦| SQL for Beginners](https://youtu.be/fZQI7nBu32M?si=YhgNnRVda4_YdLNP) By **Socratica**
- [PERN Stack Course - Postgres, Express, React, and Node](https://youtu.be/ldYcgPKEZC8?si=xngmuIdCEMX2i_y4) By **freeCodeCamp**
- [TypeScript Tutorial #1 - Introduction & Setup](https://youtu.be/2pZmKW9-I_k?si=nDUil9Yh_Ah-zfdF) By **Net Ninja**

For detailed setup instructions, refer to [@SETUP.md](SETUP.md).