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

const myPostgreQueryBuilder = new PostgreSQLQueryBuilder();
const myPostgreQuery = myPostgreQueryBuilder
  .select("name")
  .where("id < 10")
  .limit(5)
  .getSQL();
console.log(myPostgreQuery);
// Your PostgreSQL query here
