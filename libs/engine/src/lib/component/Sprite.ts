import {
  Sprite as PixiSprite,
  SpriteOptions as PixiSpriteOptions,
  Container,
} from "pixi.js";
import { Component } from "./Component.js";
import { ComponentType } from "./ComponentType.js";

export interface SpriteOptions extends PixiSpriteOptions {
  container: Container;
}

export class Sprite extends Component {
  public sprite: PixiSprite;

  constructor(options: SpriteOptions) {
    super(ComponentType.Sprite);
    this.sprite = new PixiSprite(options);
    options.container.addChild(this.sprite);
  }
}
