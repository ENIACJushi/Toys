import { world, system } from '@minecraft/server';
import { CleanSnow } from "./doge/CleanSnow";


system.run(() => {
  CleanSnow.init();
  world.sendMessage("§e[BetterSurvival] Addon Loaded!");
})
