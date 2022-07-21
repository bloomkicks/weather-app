import { DateTime } from "luxon"
import Weather from "../models/Weather"

const tom = DateTime.now().plus({ days: 1 })
const tom1 = DateTime.now().plus({ days: 2 })
const tom2 = DateTime.now().plus({ days: 3 })
const tom3 = DateTime.now().plus({ days: 4 })
const tom4 = DateTime.now().plus({ days: 5 })
const tom5 = DateTime.now().plus({ days: 6 })

const days: Weather[] = [
  new Weather('snow', {
    date: tom, temperature: {
      min: 10,
      max: 14
    }
  }),
  new Weather('snow', {
    date: tom1, temperature: {
      min: 13,
      max: 17
    }
  }),
  new Weather('snow', {
    date: tom2, temperature: {
      min: 11,
      max: 16
    }
  }),
  new Weather('snow', {
    date: tom3, temperature: {
      min: 15,
      max: 17
    }
  }),
  new Weather('snow', {
    date: tom4, temperature: {
      min: 10,
      max: 13
    }
  }),
  new Weather('snow', {
    date: tom5, temperature: {
      min: 14,
      max: 16
    }
  })
]

export default days