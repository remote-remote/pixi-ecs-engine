import { ComponentType } from './ComponentType.js';

export class Component {
  multiple = false;

  constructor(public type: ComponentType, public name?: string) {}
}
