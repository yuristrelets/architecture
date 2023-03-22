import { DateSelect } from "./components/DateSelect";
import { FormMediator } from "./FormMediator";
import { TimeIntervalSelect } from "./components/TimeIntervalSelect";
import { AnotherRecipientCheckbox } from "./components/AnotherRecipientCheckbox";
import { NameInput } from "./components/NameInput";
import { PhoneInput } from "./components/PhoneInput";
import { SelfPickupCheckbox } from "./components/SelfPickupCheckbox";

const dateSelect = new DateSelect();
const timeIntervalSelect = new TimeIntervalSelect();
const nameInput = new NameInput();
const phoneInput = new PhoneInput();
const anotherRecipientCheckbox = new AnotherRecipientCheckbox();
const selfPickupCheckbox = new SelfPickupCheckbox();

// initial hidden state
nameInput.setHidden(true);
phoneInput.setHidden(true);
// console output
// [NameInput] hidden: true
// [PhoneInput] hidden: true

new FormMediator(
  dateSelect,
  timeIntervalSelect,
  nameInput,
  phoneInput,
  anotherRecipientCheckbox,
  selfPickupCheckbox
);

dateSelect.setDate("22.03.2023");
// console output
// [DateSelect] date: 22.03.2023
// [Mediator Event] ChangeDate { date: '22.03.2023' }
// [TimeIntervalSelect] date: 22.03.2023
// [TimeIntervalSelect] rearrange time intervals

anotherRecipientCheckbox.setChecked(true);
// console output
// [AnotherRecipientCheckbox] checked: true
// [Mediator Event] AnotherRecipient { checked: true }
// [NameInput] hidden: false
// [PhoneInput] hidden: false

anotherRecipientCheckbox.setChecked(false);
// console output
// [AnotherRecipientCheckbox] checked: false
// [Mediator Event] AnotherRecipient { checked: false }
// [NameInput] hidden: true
// [PhoneInput] hidden: true

selfPickupCheckbox.setChecked(true);
// console output
// [SelfPickupCheckbox] checked: true
// [Mediator Event] SelfPickup { checked: true }
// [DateSelect] disabled: true
// [TimeIntervalSelect] disabled: true
// [NameInput] disabled: true
// [PhoneInput] disabled: true
// [AnotherRecipientCheckbox] disabled: true
