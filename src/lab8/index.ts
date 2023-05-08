import { MySQLQueryBuilder } from "./lib/MySQLQueryBuilder";
import { PostgreSQLQueryBuilder } from "./lib/PostgreSQLQueryBuilder";

const mySqlQueryBuilder = new MySQLQueryBuilder();
const mySqlQuery = mySqlQueryBuilder
  .select("title")
  .where("id = 1")
  .limit(25)
  .getSQL();
console.log(mySqlQuery);
// Your MySQL query here

const postgreQueryBuilder = new PostgreSQLQueryBuilder();
const postgreQuery = postgreQueryBuilder
  .select("name")
  .where("id < 10")
  .limit(5)
  .getSQL();
console.log(postgreQuery);
// Your PostgreSQL query here
