import type { Highlight } from "./highlights";

type WeatherType =
  | "clear"
  | "hail"
  | "light"
  | "light-rain"
  | "heavy"
  | "heavy-rain"
  | "sleet"
  | "snow"
  | "shower"
  | "thunder";

export interface WeatherStats {
  minTemperature: number;
  maxTemperature: number;
  weatherType: WeatherType;
}

export interface CurrentWeatherStats extends WeatherStats {
  avgTemperature: number;
  highlights: Highlight[];
}
