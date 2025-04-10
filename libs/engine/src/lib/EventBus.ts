export type GlobalEventHandler = (...args: any) => void;

export type EventQueue = Map<string, any>;

export class EventBus {
  events: EventQueue = new Map<string, any>();
  handlers = new Map<string, GlobalEventHandler>();
  constructor() {}

  emit(event: string, payload: any) {
    this.events.set(event, payload);
  }

  handle() {
    this.events.forEach((payload, event) => {
      const handler = this.handlers.get(event) || this.matchHandler(event);
      if (handler) {
        handler(payload);
      }
    });
  }

  matchHandler(event: string) {
    for (const matcher of this.handlers.keys()) {
      if (matcher.endsWith('*') && event.startsWith(matcher.replace('*', ''))) {
        return this.handlers.get(matcher);
      }
    }
    return;
  }

  clear(event?: string) {
    if (event) {
      this.events.delete(event);
    } else {
      this.events.clear();
    }
  }

  on(event: string, handler: GlobalEventHandler) {
    this.handlers.set(event, handler);
  }

  off(event: string) {
    this.handlers.delete(event);
  }
}
