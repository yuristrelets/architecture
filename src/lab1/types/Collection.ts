export interface Collection<T> {
  getItems(): T[];
  getCount(): number;
  addItem(item: T): void;
}
