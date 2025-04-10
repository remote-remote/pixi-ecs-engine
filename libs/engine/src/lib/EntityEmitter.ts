// @ts-check

import { Container } from "pixi.js";
import { Entity } from "./entity/Entity.js";

export interface EmitterOptions {
  timeout: number;
  active: boolean | (() => boolean);
  generator: () => Entity;
  container: import("pixi.js").Container;
}

export class EntityEmitter extends Entity {
  timeout: number;
  generator: () => Entity;
  active: boolean | (() => boolean);
  container: Container;
  entities: Set<Entity>;
  timer: any;

  constructor(options: EmitterOptions) {
    super("emitter");
    this.timeout = options.timeout;
    this.generator = options.generator;
    this.active = options.active;
    this.container = options.container;
    this.entities = new Set();
    if (this.isActive) {
      this.setTimer();
    }
  }

  get isActive() {
    if (typeof this.active === "function") {
      return this.active();
    }
    return this.active;
  }

  emit() {
    if (this.isActive) {
      console.log("active emit");
      const entity = this.generator();
      // entity.onDestroy(() => this.entities.delete(entity));
      // entity.addToContainer(this.container);
      this.entities.add(entity);
    }
    this.setTimer();
  }

  setTimer() {
    this.timer = setTimeout(() => this.emit(), this.timeout);
  }
}
