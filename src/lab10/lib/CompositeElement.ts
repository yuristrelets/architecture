import { Element } from "./Element";

export abstract class CompositeElement implements Element {
  protected children: Element[] = [];

  public add(element: Element): void {
    this.children.push(element);
  }

  public remove(element: Element): void {
    this.children = this.children.filter((child) => child !== element);
  }

  public getChildren(): Element[] {
    return this.children;
  }

  public render() {
    return this.children.map((child) => child.render()).join("\n");
  }
}
