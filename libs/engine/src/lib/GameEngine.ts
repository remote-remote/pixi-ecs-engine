import { Application } from "pixi.js";
import { Entity } from "./entity/Entity.js";
import { System } from "./system/System.js";
import { EventBus } from "./EventBus.js";

export class GameEngine {
  private entities = new Map<string, Entity>();
  private systems = new Map<string, System>();
  public eventBus = new EventBus();

  constructor(public app: Application) {}

  start() {
    this.app.ticker.add(({ deltaTime: dt }) => {
      this.update(dt);
    });
  }

  stop() {
    this.app.ticker.stop();
  }

  update(dt: number) {
    const systemNames = ["movement", "script", "events", "render"];
    for (const system of systemNames) {
      this.systems.get(system)?.update(this.entities, dt, this);
    }
    this.eventBus.handle();
    this.eventBus.clear();
  }

  addEntity(entity: Entity) {
    this.entities.set(entity.id, entity);
  }

  addSystem(system: System) {
    this.systems.set(system.id, system);
  }

  get events() {
    return this.eventBus.events;
  }
}
