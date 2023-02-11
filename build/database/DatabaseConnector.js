"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mysql_1 = __importDefault(require("mysql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var DatabaseConnector;
(function (DatabaseConnector) {
    function connect() {
        const connection = mysql_1.default.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        });
        return connection;
    }
    DatabaseConnector.connect = connect;
    function disconnect(connection) {
        connection.end();
    }
    DatabaseConnector.disconnect = disconnect;
})(DatabaseConnector || (DatabaseConnector = {}));
exports.default = DatabaseConnector;
