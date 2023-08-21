import type { WeatherStats } from "../models/weather-stats";
import { createSlice } from "@reduxjs/toolkit";

const initialState: WeatherStats[] | null = [
  {
    minTemperature: 10,
    maxTemperature: 14,
    weatherType: "snow",
  },
  {
    minTemperature: 11,
    maxTemperature: 17,
    weatherType: "hail",
  },
  {
    minTemperature: 15,
    maxTemperature: 17,
    weatherType: "clear",
  },
  {
    minTemperature: 10,
    maxTemperature: 13,
    weatherType: "shower",
  },
  {
    minTemperature: 10,
    maxTemperature: 13,
    weatherType: "heavy-rain",
  },
];

const forecastWeatherSlice = createSlice({
  name: "forecastWeather",
  initialState,
  reducers: {},
});

export const forecastWeatherActions = forecastWeatherSlice.actions;
export const forecastWeatherReducer = forecastWeatherSlice.reducer;
