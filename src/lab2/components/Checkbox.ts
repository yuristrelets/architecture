import { UiComponent } from "./UiComponent";

export class Checkbox extends UiComponent {
  protected isChecked = false;

  setChecked(value: boolean) {
    this.log(`checked: ${value}`);

    this.isChecked = value;
  }
}
