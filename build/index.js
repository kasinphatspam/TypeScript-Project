"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const DatabaseConnector_1 = __importDefault(require("./database/DatabaseConnector"));
const AuthRouter_1 = __importDefault(require("./route/AuthRouter"));
dotenv_1.default.config();
const port = Number(process.env.SERVER_PORT) || 3000;
const app = (0, express_1.default)();
const connection = DatabaseConnector_1.default.connect();
app.use('/auth', AuthRouter_1.default);
app.listen(port, () => {
    console.log(`Backend server is running on port ${port}`);
});
