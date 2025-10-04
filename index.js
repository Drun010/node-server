import '@dotenvx/dotenvx/config';
import express from "express";
import authRoutes from "./routes/auth.js";
import timersRoutes from "./routes/timerRoutes.js";
import Db from "./db/index.js";

const connect = Db.connect

const app = express();

// Подключаемся к MongoDB
connect();

// Парсинг JSON
app.use(express.json());

// Роуты
app.use("/auth", authRoutes);
app.use("/api/timers", timersRoutes);

// Запускаем HTTP-сервер
const port = process.env.PORT || 3000;

// Запускаем HTTP-сервер
const server = app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});

// Подключаем WebSocket
import { setupWebSocket } from "./ws-server.js";
setupWebSocket(server);
