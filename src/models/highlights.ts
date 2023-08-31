export interface Highlight {
  title: string;
  value: string;
  measureUnit: string;
  wind?: {
    direction: string;
    rotationDegree: number;
  };
}
