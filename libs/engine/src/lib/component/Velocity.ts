import { ComponentType } from "./ComponentType.js";
import { VectorComponent } from "./VectorComponent.js";

export class Velocity extends VectorComponent {
  constructor(x = 0, y = 0) {
    super(ComponentType.Velocity, x, y);
  }
}
