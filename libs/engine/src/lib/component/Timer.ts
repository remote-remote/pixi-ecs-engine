import { Entity } from '../entity/Entity.js';
import { Component } from './Component.js';
import { ComponentType } from './ComponentType.js';

export interface TimerOptions {
  timeout: number;
  fn: (e: Entity) => void;
}

export class Timer extends Component {
  override multiple = true;
  timeout: number;
  fn: (e: Entity) => void;

  constructor(name: string, options: TimerOptions) {
    super(ComponentType.Timer, name);
    this.timeout = options.timeout;
    this.fn = options.fn;
  }
}
