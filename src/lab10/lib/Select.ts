import { Element } from "./Element";

export class Select implements Element {
  constructor(protected name: string, protected options: string[]) {}

  protected renderOptions() {
    return this.options
      .map((option) => `<option value="${option}">${option}</option>`)
      .join("\n");
  }

  public render() {
    return [
      `<select name="${this.name}">`,
      this.renderOptions(),
      "</select>",
    ].join("\n");
  }
}
