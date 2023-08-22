import { WeatherCondition } from "../models/weather-stats";

function getWeatherCondition(defCondition: string): WeatherCondition {
  const cond = defCondition.toLowerCase().split(" ").join("");
  if (cond.includes("sunny") || cond.includes("clear"))
    return WeatherCondition.CLEAR;
  else if (cond.includes("partlycloudy")) return WeatherCondition.LIGHT;
  else if (cond.includes("cloud" || cond.includes("fog")))
    return WeatherCondition.CLOUDY;
  else if (cond.includes("heavyrain")) return WeatherCondition.HEAVY_RAIN;
  else if (cond.includes("rain")) return WeatherCondition.LIGHT_RAIN;
  else if (cond.includes("shower")) return WeatherCondition.SHOWER;
  else if (cond.includes("thunder")) return WeatherCondition.THUNDER;
  else if (cond.includes("snow")) return WeatherCondition.SNOW;
  else if (cond.includes("sleet")) return WeatherCondition.SLEET;
  else if (
    cond.includes("blizzard") ||
    cond.includes("blowingsnow" || cond.includes("freez"))
  )
    return WeatherCondition.HAIL;
  return WeatherCondition.LIGHT;
}

export default getWeatherCondition