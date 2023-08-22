export enum WindDirections {
  N = "90deg",
  NE = "135deg",
  E = "180deg",
  SE = "225deg",
  S = "270deg",
  SW = "315deg",
  W = "360deg",
  NW = "45deg",
}

type Direction = keyof typeof WindDirections;
type Rotation = (typeof WindDirections)[Direction];

export interface Wind {
  direction: Direction;
  rotation?: Rotation;
}

export interface Highlight {
  title: string;
  value: string;
  measureUnit: string;
  wind?: Wind;
}