import { System } from './System.js';
import { Entity } from '../entity/Entity.js';
import { ComponentType } from '../component/index.js';

export class RenderSystem extends System {
  constructor() {
    super('render', [ComponentType.Sprite, ComponentType.Transform]);
  }

  override update(entities: Map<string, Entity>) {
    entities.forEach((entity) => {
      if (this.canProcess(entity)) {
        const sprite = entity.getComponent(ComponentType.Sprite);
        const transform = entity.getComponent(ComponentType.Transform);

        sprite.sprite.x = transform.position.x;
        sprite.sprite.y = transform.position.y;
        sprite.sprite.rotation = transform.rotation;
        sprite.sprite.scale.x = transform.scale.x;
        sprite.sprite.scale.y = transform.scale.y;
      }
    });
  }
}
