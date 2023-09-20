import knex from "knex";
import { mysqlConfig } from "./mysql-config";

export const knexSource = knex({
    client: "mysql",
    connection: mysqlConfig
})