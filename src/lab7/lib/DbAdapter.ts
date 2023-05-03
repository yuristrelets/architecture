export interface DbAdapter {
  query(query: string): void;
}
