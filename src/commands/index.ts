import { Command } from "../types";

import { pauseSong, playSong } from "./playback";

export const commands: Command[] = [
  {
    title: "Pause",
    description: "Pause the current song.",
    icon: "pause",
    do: pauseSong
  },
  {
    title: "Play",
    description: "Play a song.",
    icon: "play",
    do: playSong
  }
]