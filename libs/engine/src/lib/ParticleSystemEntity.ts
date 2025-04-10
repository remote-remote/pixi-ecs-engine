// @ts-check

// import { Entity } from "./Entity.js";
// import { Container } from "pixi.js";

// export interface ParticleSystemOptions {
//   count: number;
//   generator: () => Entity;
// }

// export class ParticleSystemEntity extends Entity {
//   container: Container;

//   /**
//    * @param {ParticlesConfig} config
//    */
//   constructor(config) {
//     super('particles');
//     this.particles = [];
//     this.generator = config.generator();
//     this.container = new Container();
//     for (let i = 0; i < config.count; i++) {
//       const particle = config.generator();
//       this.container.addChild(particle.renderable);
//       this.particles.push(particle);
//     }
//   }

//   /**
//    * @param {number} dt
//    */
//   update(dt) {
//     this.particles.forEach((p) => p.update(dt));
//   }

//   /**
//    * @param {Container} container
//    */
//   addToContainer(container) {
//     container.addChild(this.container);
//   }
// }
