import { Command } from "../types";

import { resumeSong } from "./playback";

export const commands: Command[] = [
  {
    title: "Resume",
    description: "Start/Resume the current song.",
    icon: "resume",
    do: resumeSong
  },
  {
    title: "Play",
    description: "Play a song.",
    icon: "play",
  }
]