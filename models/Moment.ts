enum Directions {
  N = "90deg",
  NE = "135deg",
  E = "180deg",
  SE = "225deg",
  S = "270deg",
  SW = "315deg",
  W = "360deg",
  NW = "45deg"
}

export type Direction = keyof typeof Directions
export type Rotation = typeof Directions[Direction]

export type MomentType = 'wind' | 'humidity' | 'visibility' | 'air-pressure'

interface Wind {
  direction: Direction,
  rotation?: Rotation
}

class Moment {
  type: MomentType
  title: string;
  value: number | string;
  measureSign: string;
  wind?: Wind;

  constructor(type: MomentType, value: number | string, measureSign: string = '%', wind?: Wind) {
    this.type = type
    this.value = value
    this.measureSign = measureSign

    if (wind) {
      wind.rotation = Directions[wind!.direction]
    }
    this.wind = wind

    let title: string = type[0].toUpperCase() + type.slice(1);
    switch (type) {
      case 'wind':
        title = 'Wind Status'
        break
      case 'air-pressure':
        title = 'Air Pressure'
        break
    }

    this.title = title
  }
}

export default Moment