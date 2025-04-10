// @ts-check
import { Component } from './Component.js';
import { ComponentType } from './ComponentType.js';
import { Vector } from './Vector.js';

export class Transform extends Component {
  constructor(
    public position: Vector = { x: 0, y: 0 },
    public scale: Vector = { x: 1, y: 1 },
    public rotation: number = 0
  ) {
    super(ComponentType.Transform);
  }

  static randomPosition(area: { width: number; height: number }) {
    return {
      x: Math.random() * area.width,
      y: Math.random() * area.height,
    };
  }
}
