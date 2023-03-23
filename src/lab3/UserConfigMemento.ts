import { Memento } from "./types/Memento";

export class UserConfigMemento implements Memento {
  private readonly date: Date;

  constructor(protected state: string) {
    this.date = new Date();
  }

  public getState() {
    return this.state;
  }

  public getName() {
    return `[${this.getDate()}] ${this.getState()}`;
  }

  public getDate(): string {
    return this.date.toISOString();
  }
}
