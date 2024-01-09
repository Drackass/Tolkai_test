import express, { Request, Response } from 'express';
import cors from 'cors';
import pool from './db';

const app = express();
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.json());

// Routes

// create a conversation
app.post("/conversations", async (req: Request, res: Response) => {
    try {
        console.log(req.body);
        const { user_id, assistant_id, title } = req.body;
        const result = await pool.query(
            "INSERT INTO Conversations (user_id, assistant_id, title) VALUES ($1, $2, $3) RETURNING * ",
            [user_id, assistant_id, title]
        );
        res.json(result.rows[0]);
    } catch (error: any) {
        console.log(error.message);
    }
});

// get 20 first Conversations
app.get("/conversations", async (req: Request, res: Response) => {
    try {
        const result = await pool.query(
            "SELECT * FROM Conversations ORDER BY timestamp DESC LIMIT 20"
        );
        res.json(result.rows);
    } catch (error: any) {
        console.log(error.message);
    }
});

// get Conversations details
app.get("/conversations/:id", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT
            Conversations.conversation_id,
            Conversations.title,
            Conversations.user_id as user_id,
            Conversations.assistant_id as bot_id,
            Users.username as user_name,
            Bot.username as bot_name,
            COUNT(Messages.message_id) as message_count,
            Conversations.timestamp as conversation_date
        FROM Conversations
        JOIN Users ON Conversations.user_id = Users.user_id
        JOIN Users AS Bot ON Conversations.assistant_id = Bot.user_id
        LEFT JOIN Messages ON Conversations.conversation_id = Messages.conversation_id
        WHERE Conversations.conversation_id = $1
        GROUP BY Conversations.conversation_id, Conversations.title, Conversations.user_id, Conversations.assistant_id, Users.username, Bot.username, Conversations.timestamp
        ORDER BY Conversations.timestamp ASC;`,
            [id]
        );

        res.json(result.rows);
    } catch (error: any) {
        console.log(error.message);
    }
});

// get all Messages from a Conversation
app.get("/conversations/:id/messages", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            "SELECT Messages.*, Users.username as author FROM Messages JOIN Users ON Messages.author_id = Users.user_id WHERE Messages.conversation_id = $1 ORDER BY Messages.timestamp ASC;",
            [id]
        );
        res.json(result.rows);
    } catch (error: any) {
        console.log(error.message);
    }
});

// get number of messages from a conversation
app.get("/conversations/:id/messages/count", async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            "SELECT COUNT(*) FROM Messages WHERE conversation_id = $1",
            [id]
        );
        res.json(result.rows[0]);
    } catch (error: any) {
        console.log(error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
