import { Element } from "./Element";

export class Input implements Element {
  constructor(protected type: string, protected name: string) {}

  public render() {
    return `<input type="${this.type}" name="${this.name}" />`;
  }
}
