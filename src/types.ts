export type CommandTypes = "Play" | "Resume" | "Pause";

export interface Command {
  title: CommandTypes,
  description: string,
  icon: string,
  do?: (extra?: string) => void
}
