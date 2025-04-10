import { GameEngine } from "./GameEngine.js";

export function randomPosition(engine: GameEngine) {
  return {
    x: Math.random() * engine.app.screen.width,
    y: Math.random() * engine.app.screen.height,
  };
}
