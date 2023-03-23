import { Memento } from "./types/Memento";
import { UserConfigState } from "./types/UserConfigState";
import { UserConfigMemento } from "./UserConfigMemento";
import { Serializable } from "./types/Serializable";

export class UserConfig implements Serializable {
  constructor(private state: UserConfigState) {
    console.log(`[UserConfig]: initial state: ${this}`);
  }

  setState(state: Partial<UserConfigState>) {
    this.state = { ...this.state, ...state };
    console.log(`[UserConfig] new state: ${this}`);
  }

  public save(): Memento {
    return new UserConfigMemento(this.toString());
  }

  public restore(memento: Memento) {
    this.state = JSON.parse(memento.getState());
    console.log(`[UserConfig]: restored state: ${this}`);
  }

  toString() {
    return JSON.stringify(this.state);
  }
}
