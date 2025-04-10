import { System } from './System.js';
import { Entity } from '../entity/Entity.js';
import { ComponentType } from '../component/ComponentType.js';
import { GameEngine } from '../GameEngine.js';

export class EventsSystem extends System {
  constructor() {
    super('events', [ComponentType.EventHandler]);
  }

  override update(
    entities: Map<string, Entity>,
    _dt: number,
    engine: GameEngine
  ) {
    entities.forEach((entity) => {
      if (this.canProcess(entity)) {
        const eventComponents = entity.getComponents(
          ComponentType.EventHandler
        );
        engine.events.forEach((params, event) => {
          eventComponents.forEach((c) => {
            if (c.name === event) {
              c.fn(entity, params);
            }
          });
        });
      }
    });
  }
}
