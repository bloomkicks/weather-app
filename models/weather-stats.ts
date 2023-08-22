export enum WeatherCondition {
  CLEAR = "clear",
  LIGHT = "light",
  CLOUDY = "cloudy",
  LIGHT_RAIN = "light-rain",
  HEAVY_RAIN = "heavy-rain",
  SHOWER = "shower",
  THUNDER = "thunder",
  SNOW = "snow",
  SLEET = "sleet",
  HAIL = "hail",
}

export interface WeatherStats {
  minTemperature?: number | string;
  maxTemperature?: number | string;
  temperature?: number | string;
  weatherCondition?: WeatherCondition;
}
