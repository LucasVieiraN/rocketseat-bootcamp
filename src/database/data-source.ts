import "reflect-metadata";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: process.env.NODE_ENV === "test" ? 5432 : 5432,
  username: "docker",
  password: "1234",
  database: process.env.NODE_ENV === "test" ? "rentx_test" : "rentx",
  entities: ["./src/modules/**/entities/*.ts"],
  migrations: ["./src/database/migrations/*.ts"],
});

export function createConnection(host = "localhost"): Promise<DataSource> {
  return AppDataSource.setOptions({ host }).initialize();
}

export default AppDataSource;
