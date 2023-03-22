import { UiComponent } from "./UiComponent";

export class TimeIntervalSelect extends UiComponent {
  public setDate(date: string) {
    this.log(`date: ${date}`);
    this.log("rearrange time intervals");
  }
}
