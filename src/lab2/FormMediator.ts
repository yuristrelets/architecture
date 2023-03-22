import { Mediator } from "./types/Mediator";
import { Action } from "./types/Action";
import { DateSelect } from "./components/DateSelect";
import { TimeIntervalSelect } from "./components/TimeIntervalSelect";
import { Input } from "./components/Input";
import { Checkbox } from "./components/Checkbox";

type FormMediatorNotifyParams = {
  date?: string;
  checked?: boolean;
};

export class FormMediator implements Mediator {
  constructor(
    private dateSelect: DateSelect,
    private timeIntervalSelect: TimeIntervalSelect,
    private nameInput: Input,
    private phoneInput: Input,
    private anotherRecipientCheckbox: Checkbox,
    private selfPickupCheckbox: Checkbox
  ) {
    this.dateSelect.setMediator(this);
    this.timeIntervalSelect.setMediator(this);
    this.nameInput.setMediator(this);
    this.phoneInput.setMediator(this);
    this.anotherRecipientCheckbox.setMediator(this);
    this.selfPickupCheckbox.setMediator(this);
  }

  notify(action: Action, params: FormMediatorNotifyParams = {}) {
    console.log("[Mediator Event]", action, params);

    if (action === Action.ChangeDate && params.date) {
      this.timeIntervalSelect.setDate(params.date);
    }

    if (action === Action.AnotherRecipient) {
      const checked = !params.checked;

      this.nameInput.setHidden(checked);
      this.phoneInput.setHidden(checked);
    }

    if (action === Action.SelfPickup) {
      const checked = !!params.checked;

      this.dateSelect.setDisabled(checked);
      this.timeIntervalSelect.setDisabled(checked);
      this.nameInput.setDisabled(checked);
      this.phoneInput.setDisabled(checked);
      this.anotherRecipientCheckbox.setDisabled(checked);
    }
  }
}
