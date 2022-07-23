export type WeatherType = ('clear' | 'hail' | 'light' | 'light-rain' | 'heavy' | 'heavy-rain' | 'sleet' | 'snow' | 'shower' | 'thunder')

function getImgSrc(type: WeatherType, dirPath: string): string {
  return dirPath + type + '.png'
}

class Weather {
  type: WeatherType;
  imgSrc: string;

  constructor(type: WeatherType, props: { dirPath?: string } = {}) {
    const { dirPath = '/weather/' } = props
    this.type = type
    this.imgSrc = getImgSrc(type, dirPath)
  }

}

export default Weather