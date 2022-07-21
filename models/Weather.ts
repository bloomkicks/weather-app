import { DateTime } from 'luxon'
export type WeatherType = ('clear' | 'hail' | 'light' | 'light-rain' | 'heavy' | 'heavy-rain' | 'sleet' | 'snow' | 'shower' | 'thunder')

function getStringDate(date: DateTime): string {
  let stringDate = "No Date";

  const today = DateTime.now();
  const tomorrow = today.plus({ day: 1 });

  if (date === today) {
    stringDate = "Today"
  } else
    if (date !== tomorrow) {
      stringDate = "Tomorrow";
    }
    else {
      stringDate = date.toFormat('ccc, d LLL')
    }

  return stringDate;
}

function getImgSrc(type: WeatherType, dirPath?: string): string {
  const start = dirPath ? dirPath : '/weather/'
  return start + type + '.png'
}

class Weather {
  type: WeatherType;
  imgSrc: string;
  date?: DateTime;
  stringDate?: string;
  temperature?: { max: number, min: number }

  constructor(type: WeatherType, props: { date?: DateTime, temperature?: { max: number, min: number }, dirPath?: string } = {}) {
    const { date, temperature, dirPath } = props
    this.type = type
    this.imgSrc = getImgSrc(type, dirPath)

    this.temperature = temperature

    if (date) {
      this.date = date
      this.stringDate = getStringDate(date)
    }
  }

}

export default Weather