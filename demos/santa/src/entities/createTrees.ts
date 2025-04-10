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

export function createTrees(engine: GameEngine) {
  function wrapTree(entity: Entity, _dt: number, engine: GameEngine) {
    const { width: viewWidth } = engine.app.screen;
    const transform = entity.getComponent(ComponentType.Transform);
    const { sprite } = entity.getComponent(ComponentType.Sprite);
    if (transform.position.x <= 0 - sprite.width) {
      transform.position.x = viewWidth + sprite.width;
    }
  }

  const texture = getTexture('tree');
  const { width: viewWidth, height: viewHeight } = engine.app.screen;

  for (let i = 0; i < 10; i++) {
    const depth = Math.random();
    engine.addEntity(
      new Entity(`tree_${i}`)
        .addComponent(
          new Sprite({
            container: engine.app.stage,
            texture,
            alpha: depth,
            zIndex: Math.floor((1 - depth) * 1000),
            scale: {
              x: depth,
              y: depth,
            },
          })
        )
        .addComponent(
          new Transform({
            x: Math.random() * viewWidth,
            y: viewHeight - ((1 - depth) * viewHeight) / 2,
          })
        )
        .addComponent(new Velocity(depth - 1 * 3 - 1, 0))
        .addComponent(new Script('wrap', wrapTree))
    );
  }
}
