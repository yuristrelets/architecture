import { UserConfig } from "./UserConfig";
import { Caretaker } from "./Caretaker";

const userConfig = new UserConfig({
  news: true,
  offers: true,
  advertising: true,
});
// console output
// [UserConfig]: initial state: {"news":true,"offers":true,"advertising":true}

const caretaker = new Caretaker(userConfig);

caretaker.backup();
caretaker.logHistory();
// [Caretaker] history:
// [2023-03-23T09:38:25.509Z] {"news":true,"offers":true,"advertising":true}

userConfig.setState({ news: false });
// [UserConfig] new state: {"news":false,"offers":true,"advertising":true}

caretaker.backup();
caretaker.logHistory();
// [Caretaker] history:
// [2023-03-23T09:38:25.509Z] {"news":true,"offers":true,"advertising":true}
// [2023-03-23T09:38:25.510Z] {"news":false,"offers":true,"advertising":true}

userConfig.setState({ offers: false, news: true });
// [UserConfig] new state: {"news":true,"offers":false,"advertising":true}
userConfig.setState({ news: false, advertising: false });
// [UserConfig] new state: {"news":false,"offers":false,"advertising":false}

caretaker.backup();
caretaker.logHistory();
// [Caretaker] history:
// [2023-03-23T09:42:21.878Z] {"news":true,"offers":true,"advertising":true}
// [2023-03-23T09:42:21.879Z] {"news":false,"offers":true,"advertising":true}
// [2023-03-23T09:42:21.881Z] {"news":false,"offers":false,"advertising":false}

userConfig.setState({ news: true, offers: true });
// [UserConfig] new state: {"news":true,"offers":true,"advertising":false}

caretaker.undo();
// [Caretaker] restoring: [2023-03-23T09:43:24.335Z] {"news":false,"offers":false,"advertising":false}
// [UserConfig]: restored state: {"news":false,"offers":false,"advertising":false}
caretaker.undo();
// [Caretaker] restoring: [2023-03-23T09:43:24.333Z] {"news":false,"offers":true,"advertising":true}
// [UserConfig]: restored state: {"news":false,"offers":true,"advertising":true}
caretaker.logHistory();
// [Caretaker] history:
// [2023-03-23T09:44:31.777Z] {"news":true,"offers":true,"advertising":true}
