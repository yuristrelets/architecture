import { QueryBuilder } from "./QueryBuilder";

export class PostgreSQLQueryBuilder implements QueryBuilder {
  public select(value: string) {
    // select implementation
    return this;
  }

  public where(value: string) {
    // where implementation
    return this;
  }

  public limit(value: number) {
    // limit implementation
    return this;
  }

  public getSQL(): string {
    return "Your PostgreSQL query here";
  }
}
