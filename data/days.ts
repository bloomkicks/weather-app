import { DateTime } from "luxon"
import Weather from "../models/Weather"
import Day from "../models/Day"

const tom = DateTime.now().plus({ days: 1 })
const tom1 = DateTime.now().plus({ days: 2 })
const tom2 = DateTime.now().plus({ days: 3 })
const tom3 = DateTime.now().plus({ days: 4 })
const tom4 = DateTime.now().plus({ days: 5 })
const tom5 = DateTime.now().plus({ days: 6 })

const days: Day[] = [
  new Day(tom, new Weather('snow'), {
    min: 10,
    max: 14
  }),
  new Day(tom1, new Weather('hail'), {
    min: 13,
    max: 17
  }),
  new Day(tom2, new Weather('clear'), {
    min: 11,
    max: 16
  }),
  new Day(tom3, new Weather('shower'), {
    min: 15,
    max: 17
  }),
  new Day(tom4, new Weather('heavy-rain'), {
    min: 10,
    max: 13
  }),
  new Day(tom5, new Weather('thunder'), {
    min: 14,
    max: 16
  })
]

export default days