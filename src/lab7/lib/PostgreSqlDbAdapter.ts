import { DbAdapter } from "./DbAdapter";

export class PostgreSqlDbAdapter implements DbAdapter {
  private static instance: PostgreSqlDbAdapter;
  private constructor() {
    console.log("PostgreSqlDbAdapter created");
  }

  public static getInstance() {
    if (!this.instance) this.instance = new this();

    return this.instance;
  }

  public query(query: string) {
    console.log(`execute PostgreSQL query: ${query}`);
  }
}
