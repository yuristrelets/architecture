import { Action } from "./Action";

export interface Mediator {
  notify(action: Action, params?: Record<string, any>): void;
}
