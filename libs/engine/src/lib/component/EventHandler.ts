import { Entity } from '../entity/Entity.js';
import { Component } from './Component.js';
import { ComponentType } from './ComponentType.js';

/**
 * EventHandlerComponent allows entities to respond to global events.
 */
export class EventHandler extends Component {
  override multiple = true;

  /**
   * @param event The name of the GlobalEvent for the handler
   * @param fn The handler function accepts the entity and any params that are passed
   * with the event.
   */
  constructor(
    public override name: string,
    public fn: (e: Entity, ...params: any) => void
  ) {
    super(ComponentType.EventHandler, name);
  }
}
