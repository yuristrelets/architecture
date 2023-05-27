import { CompositeElement } from "./CompositeElement";

export class Form extends CompositeElement {
  constructor(protected action: string, protected method = "get") {
    super();
  }

  public render() {
    const children = super.render();

    return [
      `<form method="${this.method.toLowerCase()}" action="${this.action}">`,
      children,
      "</form>",
    ].join("\n");
  }
}
