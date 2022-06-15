import { EventHandlerInterface } from "./event.handler.interface";
import { EventInterface } from "./event.interface";

export interface EventDispacherInterface {
  notify(event: EventInterface): void;
  register(eventName: string, eventHandler: EventHandlerInterface): void;
  unregister(eventName: string, eventHandler: EventHandlerInterface): void;
  unregisterAll(eventHandler: EventHandlerInterface): void;
}
