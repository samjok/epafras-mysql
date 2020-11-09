import express from "express";
import cors from "cors";
import { createRoutes } from "./routes/routes";
import "reflect-metadata";
import { createConnection, Connection } from "typeorm"
import { config } from './config'

const app = express();
app.use(cors());

const port = 8000;

app.use(express.json());

app.use("/api", createRoutes());

app.get("/", (_req, res) => res.send("Server is running."));

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

createConnection(config).then(async () => {
    console.log("Server is connected to MySQL database.")
}).catch(e => console.log(e))
