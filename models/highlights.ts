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

export interface Highlight {
  title: string;
  value: string;
  measureUnit: string;
  wind?: {
    direction: string;
    rotationDegree: number;
  };
}
