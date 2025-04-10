import { Component } from "./Component.js";
import { ComponentType } from "./ComponentType.js";

export class Mass extends Component {
  constructor(public mass: number) {
    super(ComponentType.Mass);
  }
}
