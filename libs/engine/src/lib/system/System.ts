import { ComponentType } from "../component/ComponentType.js";
import { Entity } from "../entity/Entity.js";
import { GameEngine } from "../GameEngine.js";

export class System {
  constructor(
    public id: string,
    private requiredComponents: ComponentType[],
  ) {}

  canProcess(entity: Entity) {
    return this.requiredComponents.every((c) => entity.hasComponents(c));
  }

  update(entities: Map<string, Entity>, dt: number, engine: GameEngine) {
    entities.forEach((entity) => {
      if (this.canProcess(entity)) {
        this.updateEntity(entity, dt, engine);
      }
    });
  }

  updateEntity(_entity: Entity, _dt: number, _engine: GameEngine) {
    throw new Error("Not implemented");
  }
}
