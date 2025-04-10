import { Assets, Texture } from "pixi.js";
let textures = {} as Record<string, Texture>;

export function getTexture(alias: string) {
  return textures[alias];
}

export async function loadTextures() {
  Assets.add({ alias: "snowflake_1", src: "images/snowflakes/1.png" });
  Assets.add({ alias: "snowflake_2", src: "images/snowflakes/2.png" });
  Assets.add({ alias: "snowflake_3", src: "images/snowflakes/3.png" });
  Assets.add({ alias: "snowflake_4", src: "images/snowflakes/4.png" });
  Assets.add({ alias: "snowflake_5", src: "images/snowflakes/5.png" });
  Assets.add({ alias: "snowflake_6", src: "images/snowflakes/6.png" });
  Assets.add({ alias: "snowflake_7", src: "images/snowflakes/7.png" });
  Assets.add({ alias: "gift_blue", src: "images/gifts/blue.png" });
  Assets.add({ alias: "gift_red", src: "images/gifts/red.png" });
  Assets.add({ alias: "gift_green", src: "images/gifts/green.png" });
  Assets.add({ alias: "gift_orange", src: "images/gifts/orange.png" });
  Assets.add({ alias: "santa", src: "images/santa.png" });
  Assets.add({ alias: "tree", src: "images/tree.png" });
  Assets.add({ alias: "bg", src: "images/bg.png" });
  Assets.add({ alias: "health_red", src: "images/health-red.png" });
  Assets.add({ alias: "health_green", src: "images/health-green.png" });
  Assets.add({ alias: "restart", src: "images/restart.png" });

  textures = await Assets.load([
    "snowflake_1",
    "snowflake_2",
    "snowflake_3",
    "snowflake_4",
    "snowflake_5",
    "snowflake_6",
    "snowflake_7",
    "gift_blue",
    "gift_red",
    "gift_green",
    "gift_orange",
    "health_red",
    "health_green",
    "santa",
    "tree",
    "bg",
    "restart",
  ]);
}
