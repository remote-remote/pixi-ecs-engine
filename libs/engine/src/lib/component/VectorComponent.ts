import { Component } from "./Component.js";
import { ComponentType } from "./ComponentType.js";

export class VectorComponent extends Component {
  constructor(
    type: ComponentType,
    public x = 0,
    public y = 0,
  ) {
    super(type);
  }
}
