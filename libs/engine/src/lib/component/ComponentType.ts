import { Acceleration } from "./Acceleration.js";
import { EventHandler } from "./EventHandler.js";
import { Script } from "./Script.js";
import { Sprite } from "./Sprite.js";
import { Timer } from "./Timer.js";
import { Transform } from "./Transform.js";
import { Velocity } from "./Velocity.js";

export enum ComponentType {
  EventHandler = "event_handler",
  Script = "script",
  Sprite = "sprite",
  Timer = "timer",
  Transform = "transform",
  Velocity = "velocity",
  Acceleration = "acceleration",
  Mass = "mass",
}

export interface ComponentTypeMap {
  [ComponentType.Acceleration]: Acceleration;
  [ComponentType.EventHandler]: EventHandler;
  [ComponentType.Script]: Script;
  [ComponentType.Sprite]: Sprite;
  [ComponentType.Timer]: Timer;
  [ComponentType.Transform]: Transform;
  [ComponentType.Velocity]: Velocity;
}
