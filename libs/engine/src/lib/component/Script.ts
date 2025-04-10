import { Entity } from '../entity/Entity.js';
import { GameEngine } from '../GameEngine.js';
import { Component } from './Component.js';
import { ComponentType } from './ComponentType.js';

export type ScriptFunction = (
  e: Entity,
  dt: number,
  engine: GameEngine
) => void;

export class Script extends Component {
  override multiple = true;

  constructor(name: string, public fn: ScriptFunction) {
    super(ComponentType.Script, name);
  }
}
