// import { test, expect, beforeEach } from "@jest/globals";
// import { EntityEmitter } from "./EntityEmitter";
// import { Container, Texture } from "pixi.js";
// import { SpriteEntity } from "./SpriteEntity";

// const wait = (ms: number) =>
//   new Promise((res) => setTimeout(() => res(true), ms));

// let container: Container;

// beforeEach(() => {
//   container = new Container();
// });

// test("emits when active", async () => {
//   const emitter = new EntityEmitter({
//     timeout: 70,
//     generator: function () {
//       return new SpriteEntity({
//         texture: Texture.EMPTY,
//       });
//     },
//     active: true,
//     container,
//   });

//   await wait(100);
//   expect(container.children.length).toBe(1);
//   await wait(100);
//   expect(container.children.length).toBe(2);
//   emitter.active = false;
//   await wait(100);
//   expect(container.children.length).toBe(2);
// });

// test("active function works", async () => {
//   let active = true;
//   const fnActive = () => active;

//   const emitter = new EntityEmitter({
//     timeout: 70,
//     generator: function () {
//       return new SpriteEntity({
//         texture: Texture.EMPTY,
//       });
//     },
//     active: fnActive,
//     container,
//   });

//   await wait(100);
//   expect(container.children.length).toBe(1);
//   expect(emitter.entities.size).toBe(1);
//   await wait(100);
//   expect(container.children.length).toBe(2);
//   expect(emitter.entities.size).toBe(2);
//   active = false;
//   await wait(100);
//   expect(container.children.length).toBe(2);
//   expect(emitter.entities.size).toBe(2);
// });

// test.only("generator is run in the context of the emitter", async () => {
//   function generator(this: EntityEmitter) {
//     return new SpriteEntity({
//       texture: Texture.EMPTY,
//       // position: { ...this.position },
//       // velocity: { ...this.velocity },
//     });
//   }

//   const emitter = new EntityEmitter({
//     timeout: 70,
//     generator,
//     active: true,
//     container,
//     // position: {
//     //   x: 101,
//     //   y: 102,
//     // },
//     // velocity: {
//     //   x: 103,
//     //   y: 104,
//     // },
//   });

//   await wait(100);
//   const entity = emitter.entities.values().next().value;
//   expect(entity).toBeDefined();
//   // expect(entity.position).toEqual(emitter.position);
//   // expect(entity.velocity).toEqual(emitter.velocity);
// });
