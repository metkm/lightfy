import { Command } from "../types";

import { pauseSong, playSong } from "./playback";

export const commands: Command[] = [
  {
    name: "Pause",
    description: "Pause the current song.",
    icon: "pause.svg",
    callback: pauseSong,
    type: "command"
  },
  {
    name: "Play",
    description: "Play a song.",
    icon: "play.svg",
    callback: playSong,
    type: "command"
  }
]