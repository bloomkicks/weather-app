export type Direction =
  | "N"
  | "NE"
  | "E"
  | "SE"
  | "S"
  | "SW"
  | "W"
  | "NW";

export type HighlightId = 'wind' | 'humidity' | 'visibility' | 'air-pressure'

class Highlight {
  id: HighlightId
  title: string;
  value: number;
  measureSign: string | 'percent';
  windDirection?: Direction;
  isWind?: boolean;
  isHumidity?: boolean;

  constructor(id: HighlightId, value: number, measureSign: string, windDirection?: Direction) {
    this.id = id
    this.value = value
    this.measureSign = measureSign
    this.windDirection = windDirection

    this.isWind = (id === 'wind')
    this.isHumidity = (id === 'humidity')

    let title: string[] | string = id.split('');
    title[0] = title[0].toUpperCase()
    title = title.join('')
    if (id === 'wind') {
      title += ' status'
    }

    this.title = title
  }
}

export default Highlight