// @ts-check

// import { EntityEmitter } from "../engine/EntityEmitter";
// import { GlobalStateManager } from "../engine/GlobalStateManager";
// import { SpriteEntity } from "../engine/SpriteEntity";
// import { getTexture } from "../textures";

// export function createGiftEmitter() {
//   return new EntityEmitter({
//     timeout: 1000,
//     generator: spawnGift,
//     active: () => GlobalStateManager.get("game_on") || false,
//   });
// }

// function spawnGift() {
//   const textureId = ["gift_red", "gift_blue", "gift_green", "gift_orange"][
//     Math.floor(Math.random() * 4)
//   ];
//   return new SpriteEntity({
//     texture: getTexture(textureId),
//   });
// }
