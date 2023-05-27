import { CompositeElement } from "./CompositeElement";

export class Fieldset extends CompositeElement {
  constructor(protected title: string) {
    super();
  }

  protected renderTitle() {
    return this.title ? `<legend>${this.title}</legend>` : "";
  }

  public render(): string {
    return [
      "<fieldset>",
      this.renderTitle(),
      super.render(),
      "</fieldset>",
    ].join("\n");
  }
}
