import { Memento } from "./Memento";

export interface Serializable {
  save(): Memento;
  restore(memento: Memento): void;
}
