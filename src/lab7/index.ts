import { MongoDbAdapter } from "./lib/MongoDbAdapter";
import { PostgreSqlDbAdapter } from "./lib/PostgreSqlDbAdapter";

// const mongoAdapter = new MongoDbAdapter();
// TS2673: Constructor of class 'MongoDbAdapter' is private
// and only accessible within the class declaration.

const mongoAdapter1 = MongoDbAdapter.getInstance();
const mongoAdapter2 = MongoDbAdapter.getInstance();
console.log("is equal", mongoAdapter1 === mongoAdapter2);
mongoAdapter1.query("query1");
mongoAdapter2.query("query2");
// MongoDbAdapter created
// is equal true
// execute MongoDB query: query1
// execute MongoDB query: query2

const postgreAdapter1 = PostgreSqlDbAdapter.getInstance();
const postgreAdapter2 = PostgreSqlDbAdapter.getInstance();
console.log("is equal", postgreAdapter1 === postgreAdapter2);
postgreAdapter1.query("query1");
postgreAdapter2.query("query2");
// PostgreSqlDbAdapter created
// is equal true
// execute PostgreSQL query: query1
// execute PostgreSQL query: query2
