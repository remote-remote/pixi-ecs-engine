import { System } from './System.js';
import { Entity } from '../entity/Entity.js';
import { ComponentType } from '../component/ComponentType.js';
import { GameEngine } from '../GameEngine.js';

export class ScriptSystem extends System {
  constructor() {
    super('script', [ComponentType.Script]);
  }

  override update(
    entities: Map<string, Entity>,
    dt: number,
    engine: GameEngine
  ) {
    entities.forEach((entity) => {
      if (this.canProcess(entity)) {
        const components = entity.getComponents(ComponentType.Script);
        components.forEach((s) => {
          s.fn(entity, dt, engine);
        });
      }
    });
  }
}
