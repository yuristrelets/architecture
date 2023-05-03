import { DbAdapter } from "./DbAdapter";

export class MongoDbAdapter implements DbAdapter {
  private static instance: MongoDbAdapter;
  private constructor() {
    console.log("MongoDbAdapter created");
  }

  public static getInstance() {
    if (!this.instance) this.instance = new this();

    return this.instance;
  }

  public query(query: string) {
    console.log(`execute MongoDB query: ${query}`);
  }
}
