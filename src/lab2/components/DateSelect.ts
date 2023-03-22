import { UiComponent } from "./UiComponent";
import { Action } from "../types/Action";

export class DateSelect extends UiComponent {
  public setDate(date: string) {
    this.log(`date: ${date}`);

    this.mediator?.notify(Action.ChangeDate, { date });
  }
}
