import {
  ComponentType,
  Entity,
  GameEngine,
  Script,
  Sprite,
  Transform,
  Velocity,
} from '@pixi-ecs-engine/engine';
import { getTexture } from '../textures.js';

export function createBackground(engine: GameEngine) {
  function wrap(entity: Entity) {
    const transform = entity.getComponent(ComponentType.Transform);
    const sprite = entity.getComponent(ComponentType.Sprite);
    if (transform.position.x > engine.app.screen.width) {
      transform.position.x -= 2 * sprite.sprite.width;
    }
  }

  const bgTexture = getTexture('bg');

  engine.addEntity(
    new Entity('bg1')
      .addComponent(new Transform())
      .addComponent(
        new Sprite({
          texture: bgTexture,
          container: engine.app.stage,
        })
      )
      .addComponent(new Velocity(1, 0))
      .addComponent(new Script('wrap', wrap))
  );

  engine.addEntity(
    new Entity('bg2')
      .addComponent(new Transform({ x: bgTexture.width, y: 0 }))
      .addComponent(
        new Sprite({
          texture: bgTexture,
          container: engine.app.stage,
        })
      )
      .addComponent(new Velocity(1))
      .addComponent(new Script('wrap', wrap))
  );
}
