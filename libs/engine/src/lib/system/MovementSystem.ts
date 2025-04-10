import { System } from './System.js';
import { Entity } from '../entity/Entity.js';
import { ComponentType } from '../component/ComponentType.js';

export class MovementSystem extends System {
  constructor() {
    super('movement', [ComponentType.Transform, ComponentType.Velocity]);
  }

  override update(entities: Map<string, Entity>, dt: number) {
    entities.forEach((entity) => {
      if (this.canProcess(entity)) {
        const transform = entity.getComponent(ComponentType.Transform);
        const velocity = entity.getComponent(ComponentType.Velocity);

        transform.position.x += velocity.x * dt;
        transform.position.y += velocity.y * dt;
      }
    });
  }
}
