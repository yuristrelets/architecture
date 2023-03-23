import { Memento } from "./types/Memento";
import { Serializable } from "./types/Serializable";

export class Caretaker {
  private items: Memento[] = [];

  constructor(private target: Serializable) {}

  public backup(): void {
    this.items.push(this.target.save());
  }

  public undo(): void {
    if (!this.items.length) return;

    const memento = this.items.pop();

    if (memento) {
      console.log(`[Caretaker] restoring: ${memento.getName()}`);
      this.target.restore(memento);
    }
  }

  public logHistory(): void {
    console.log("[Caretaker] history:");

    for (const item of this.items) {
      console.log(item.getName());
    }
  }
}
