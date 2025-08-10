import { world, system } from '@minecraft/server';
import {ChatSoundsHelper} from "./ChatSoundsHelper";


system.run(() => {
  ChatSoundsHelper.init();
  world.sendMessage("§e[ChatSound] Addon Loaded!");
})
