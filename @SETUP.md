# Backend Setup

## Prerequisites

Make sure you have Node.js and PostgreSQL installed on your machine.
Clone the project from GitHub

```bash

git clone git@github.com:Drackass/Tolkai_test.git
cd Tolkai_test
```

## Install dependencies

```bash

cd server
npm install
```

## Database Configuration

1. Create a PostgreSQL database with the name "tolkai" (or use a different name and update the **`src/db.ts`** file accordingly).

2. Copy the contents of the **`src/db_example.ts`** file into a new **`src/db.ts`** file in the same directory.

3. Fill in the connection information to your database in the **`src/db.ts`** file.

## Launch the server with file watching

```bash
cd .\server\
tsc --watch
node --watch dist/index.js
```

The server should be accessible at http://localhost:5000.

# Frontend Setup

## Prerequisites

Make sure you have Node.js installed on your machine.

## Install dependencies

```bash

cd client
npm install
```

## Run the React application

```bash

npm start
```

The React application should open in your browser at http://localhost:3000.

Your PERN application is now configured. Ensure that the backend server is running with the node **`--watch .\server\dist\index.js`** command during development. Adjust paths and commands based on your specific project structure.
