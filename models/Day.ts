import { DateTime } from 'luxon'
import Weather from './Weather'

interface Temperature {
  max: number;
  min: number
}

class Day {
  weather: Weather;
  date: DateTime;
  stringDate: string;
  temperature: Temperature

  constructor(date: DateTime, weather: Weather, temperature: Temperature) {
    this.weather = weather
    this.temperature = temperature

    this.date = date
    this.stringDate = getStringDate(date)
  }

}

export function getStringDate(date: DateTime): string {
  let stringDate = "No Date";

  const today = DateTime.now();
  const tomorrow = today.plus({ day: 1 });

  if (date === today) {
    stringDate = "Today"
  }
  else if (date === tomorrow) {
    stringDate = "Tomorrow";
  }
  else {
    stringDate = date.toFormat('ccc, d LLL')
  }

  return stringDate;
}

export default Day