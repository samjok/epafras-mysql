import { Book } from './entities/Book';
import { User } from './entities/User';
import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';
import "dotenv/config";

const config: MysqlConnectionOptions = {
    type: "mysql",
    host: String(process.env.DB_HOST),
    port: Number(process.env.DB_PORT),
    username: String(process.env.DB_USER),
    password: String(process.env.DB_PASSWORD),
    database: String(process.env.DB_DATABASE),
    synchronize: true,
    logging: false,
    entities: [
        User,
        Book
    ]
};

export { config };