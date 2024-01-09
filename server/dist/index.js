"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./db"));
const app = (0, express_1.default)();
const PORT = 5000;
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
// create a conversation
app.post("/conversations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(req.body);
        const { user_id, assistant_id, title } = req.body;
        const result = yield db_1.default.query("INSERT INTO Conversations (user_id, assistant_id, title) VALUES ($1, $2, $3) RETURNING * ", [user_id, assistant_id, title]);
        res.json(result.rows[0]);
    }
    catch (error) {
        console.log(error.message);
    }
}));
// get 20 first Conversations
app.get("/conversations", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query("SELECT * FROM Conversations ORDER BY timestamp DESC LIMIT 20");
        res.json(result.rows);
    }
    catch (error) {
        console.log(error.message);
    }
}));
// get Conversations details
app.get("/conversations/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield db_1.default.query(`SELECT
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
        ORDER BY Conversations.timestamp ASC;`, [id]);
        res.json(result.rows);
    }
    catch (error) {
        console.log(error.message);
    }
}));
// get all Messages from a Conversation
app.get("/conversations/:id/messages", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield db_1.default.query("SELECT Messages.*, Users.username as author FROM Messages JOIN Users ON Messages.author_id = Users.user_id WHERE Messages.conversation_id = $1 ORDER BY Messages.timestamp ASC;", [id]);
        res.json(result.rows);
    }
    catch (error) {
        console.log(error.message);
    }
}));
// get number of messages from a conversation
app.get("/conversations/:id/messages/count", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield db_1.default.query("SELECT COUNT(*) FROM Messages WHERE conversation_id = $1", [id]);
        res.json(result.rows[0]);
    }
    catch (error) {
        console.log(error.message);
    }
}));
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
