import { Checkbox } from "./Checkbox";
import { Action } from "../types/Action";

export class SelfPickupCheckbox extends Checkbox {
  setChecked(checked: boolean) {
    super.setChecked(checked);

    this.mediator?.notify(Action.SelfPickup, { checked });
  }
}
