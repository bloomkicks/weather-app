export enum WeatherType {
  CLEAR = "clear",
  HAIL = "hail",
  LIGHT = "light",
  LIGHT_RAIN = "light-rain",
  HEAVY = "heavy",
  HEAVY_RAIN = "heavy-rain",
  SLEET = "sleet",
  SNOW = "snow",
  SHOWER = "shower",
  THUNDER = "thunder",
}

export interface WeatherStats {
  minTemperature: number;
  maxTemperature: number;
  temperature: number;
  weatherType: WeatherType;
}
