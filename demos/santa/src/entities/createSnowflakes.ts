// @ts-check

import { Container } from 'pixi.js';
import { getTexture } from '../textures.js';
import {
  ComponentType,
  Entity,
  GameEngine,
  Script,
  Sprite,
  Transform,
  Velocity,
} from '@pixi-ecs-engine/engine';

export function createSnowflakes(engine: GameEngine) {
  const snowflakeContainer = new Container();
  engine.app.stage.addChild(snowflakeContainer);

  function wrapSnowflake(entity: Entity, _dt: number, engine: GameEngine) {
    const viewHeight = engine.app.screen.height;
    const viewWidth = engine.app.screen.width;
    const transform = entity.getComponent(ComponentType.Transform);

    if (transform.position.y >= viewHeight + 15) {
      transform.position.x = Math.random() * viewWidth;
      transform.position.y = -15;
    }
    if (transform.position.x <= 0) {
      transform.position.x += viewWidth + 15;
    }
  }

  const SPEED_FACTOR = 1;

  for (let i = 0; i < 80; i++) {
    const textureId = Math.ceil(Math.random() * 7);
    const texture = getTexture(`snowflake_${textureId}`);
    const depth = Math.random();
    const entity = new Entity(`sf${i}`)
      .addComponent(
        new Sprite({
          texture,
          container: snowflakeContainer,
          zIndex: Math.floor(depth * 1000),
        })
      )
      .addComponent(new Transform(Transform.randomPosition(engine.app.screen)))
      .addComponent(new Script('wrap', wrapSnowflake))
      .addComponent(new Velocity(SPEED_FACTOR * (1 - depth), -6 * (depth - 1)));
    engine.addEntity(entity);
  }
}
