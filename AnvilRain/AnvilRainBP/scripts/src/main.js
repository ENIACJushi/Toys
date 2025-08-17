import { world, system } from '@minecraft/server';


system.run(() => {
  world.sendMessage("§e[AnvilRain] Addon Loaded!");
});
