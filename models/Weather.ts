export type WeatherType = ('clear' | 'hail' | 'light' | 'light-rain' | 'heavy' | 'heavy-rain' | 'sleet' | 'snow' | 'shower' | 'thunder')

class Weather {
  type: WeatherType;
  date?: Date
  temperature?: { max?: number, min?: number }

  constructor(type: WeatherType, date?: Date, temperature?: { max?: number, min?: number }) {
    this.type = type
    this.date = date
    this.temperature = temperature
  }

  getFormattedDate(): string | void {
    let formattedDate = "Today";

    if (!this.date) return

    const weatherDate = this.date
    const currentDate = new Date();
    const tomorrowDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + 1
    );

    const currentDateString = currentDate.toDateString();
    const tomorrowDateString = tomorrowDate.toDateString();
    const weatherDateString = weatherDate.toDateString();

    if (weatherDateString !== currentDateString) {
      formattedDate = "Tomorrow";
      if (weatherDateString !== tomorrowDateString) {
        formattedDate = weatherDate.toLocaleDateString("en-DE", {
          weekday: "short",
          day: "numeric",
          month: "short",
        });
      }
    }

    return formattedDate;
  }
}

export default Weather