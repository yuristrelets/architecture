export interface QueryBuilder {
  select(value: string): this;
  where(value: string): this;
  limit(value: number): this;
  getSQL(): string;
}
