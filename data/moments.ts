import Moment from '../models/Moment'

const wind = new Moment('wind', 7, 'mph', { direction: 'SW' })
const humidity = new Moment('humidity', 84)
const visibility = new Moment('visibility', '6,4', 'miles')
const airPressure = new Moment('air-pressure', 998, 'mb')

const moments = [
  wind, humidity, visibility, airPressure
] 

export default moments