import { GameEngine } from '@pixi-ecs-engine/engine';
import { createSnowflakes } from './createSnowflakes.js';
import { createBackground } from './createBackground.js';
import { createTrees } from './createTrees.js';

export async function createEntities(engine: GameEngine) {
  createBackground(engine);
  createSnowflakes(engine);
  createTrees(engine);
  // addEntity("santa", createSanta());
  // const score = new Text({
  //   text: `Score: 0`,
  //   style: { fontFamily: "Pacifico", fontSize: 35, fill: "white" },
  // });
  // const healthRed = new Sprite(getTexture("health_red"));
  // const healthGreen = new Sprite(getTexture("health_green"));
  // const snowflakeContainer = new Container();
  // snowflakes.forEach((f) => {
  //   snowflakeContainer.addChild(f);
  // });
  // const treeContainer = new Container();
  // trees
  //   .sort((a, b) => b.zIndex - a.zIndex)
  //   .forEach((t) => treeContainer.addChild(t));
  // }
}
