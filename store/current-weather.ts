import { CurrentWeatherStats } from "../models/weather-stats";
import { createSlice } from "@reduxjs/toolkit";

const wind = {
  title: "Wind",
  value: "7",
  measureUnit: "mph",
  wind: { direction: "SW" },
};
const humidity = {
  title: "Humidity",
  value: "84",
  measureUnit: "%",
};
const visibility = {
  title: "Visibility",
  value: "6.4",
  measureUnit: "miles",
};
const airPressure = {
  title: "Air Pressure",
  value: "998",
  measureUnit: "mb",
};

const initialState: CurrentWeatherStats | null = {
  minTemperature: 10,
  maxTemperature: 14,
  avgTemperature: 12,
  weatherType: "snow",
  highlights: [wind, humidity, visibility, airPressure],
};

const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {},
});

export const currentWeatherActions = currentWeatherSlice.actions;
export const currentWeatherReducer = currentWeatherSlice.reducer;
