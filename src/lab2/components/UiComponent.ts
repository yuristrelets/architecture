import { Mediator } from "../types/Mediator";

export class UiComponent {
  protected mediator?: Mediator;
  protected hidden = false;
  protected disabled = false;

  protected log(text: string) {
    console.log(`[${this.constructor.name}] ${text}`);
  }

  public setMediator(mediator: Mediator) {
    this.mediator = mediator;
  }

  public setDisabled(value: boolean) {
    this.log(`disabled: ${value}`);

    this.disabled = value;
  }

  public setHidden(value: boolean) {
    this.log(`hidden: ${value}`);

    this.hidden = value;
  }
}
