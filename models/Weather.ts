export type WeatherType = ('clear' | 'hail' | 'light' | 'light-rain' | 'heavy' | 'heavy-rain' | 'sleet' | 'snow' | 'shower' | 'thunder')

class Weather {
  type: WeatherType

  constructor(type: WeatherType) {
    this.type = type
  }

}

export default Weather