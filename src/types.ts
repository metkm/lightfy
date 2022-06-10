export type CommandTypes = "Play" | "Resume";

export interface Command {
  title: CommandTypes,
  description: string,
  icon: string,
  do?: (extra?: string) => void
}
