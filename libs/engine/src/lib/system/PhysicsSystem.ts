import { ComponentType } from '../component/ComponentType.js';
import { Vector } from '../component/Vector.js';
import { Entity } from '../entity/Entity.js';
import { System } from './System.js';

export interface PhysicsConfig {
  globalForce: Vector;
}

export class PhysicsSystem extends System {
  constructor(public config: PhysicsConfig) {
    super('physics', [
      ComponentType.Transform,
      ComponentType.Velocity,
      ComponentType.Mass,
    ]);
  }

  override updateEntity(entity: Entity, dt: number) {
    entity.getComponent(ComponentType.Velocity).x +=
      this.config.globalForce.x * dt;
    entity.getComponent(ComponentType.Velocity).y +=
      this.config.globalForce.y * dt;
  }
}
