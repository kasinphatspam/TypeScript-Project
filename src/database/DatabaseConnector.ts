import mysql, { Connection, MysqlError } from 'mysql';
import dotenv from 'dotenv'

dotenv.config()

module DatabaseConnector{
    export function connect() {
        const connection: Connection = mysql.createConnection({
            host: process.env.DATABASE_HOST,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME
        });
        return connection
    }
}

export default DatabaseConnector