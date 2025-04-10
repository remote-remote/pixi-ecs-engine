// @ts-check
import { Application } from 'pixi.js';
import {
  GameEngine,
  RenderSystem,
  ScriptSystem,
  MovementSystem,
  EventsSystem,
  PhysicsSystem,
} from '@pixi-ecs-engine/engine';
import { loadTextures } from './textures.js';
import { createEntities } from './entities/createEntities.js';

initialize();

async function initialize() {
  const app = new Application();
  await app.init({ background: '#000000' });

  document.getElementById('container')?.appendChild(app.canvas);
  // document
  //   .querySelector("button#submit")
  //   ?.addEventListener("click", submitScore);

  // document
  //   .querySelector("button#tryAgain")
  //   ?.addEventListener("click", () => GlobalStateManager.set("game_on", true));

  // initializeGameState({ app, gravity: -175 });
  // initializeGlobalState(app);
  // const loadingText = getLoadingText();
  // app.stage.addChild(loadingText);

  await loadTextures();
  const engine = new GameEngine(app);
  engine.eventBus.on('snowflake_hit:*', (a) => {
    console.log(a);
  });
  createEntities(engine);

  engine.addSystem(new RenderSystem());
  engine.addSystem(new PhysicsSystem({ globalForce: { x: 0, y: -1 } }));
  engine.addSystem(new MovementSystem());
  engine.addSystem(new ScriptSystem());
  engine.addSystem(new EventsSystem());

  engine.start();
}

// /**
//  * @param {Event} e
//  */
// async function submitScore(e) {
//   e.preventDefault();
//   /**
//    * @type HTMLInputElement | null
//    */
//   const nameEl = document.querySelector("input#name");
//   const name = nameEl ? nameEl.value.substring(0, 10) : "unknown";
//   await fetch("/highscores", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ name, score: getGameState().score.score }),
//   }).catch(console.error);
//   getGameState().start();
// }
