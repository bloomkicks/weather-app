import { createSlice } from "@reduxjs/toolkit";
import type { Highlight } from "../models/highlights";
import {
  WeatherType,
  type WeatherStats,
} from "../models/weather-stats";
import type { PayloadAction } from "@reduxjs/toolkit";

const wind = {
  title: "Wind",
  value: "7",
  measureUnit: "mph",
  wind: { direction: "SE" },
};
const humidity = {
  title: "Humidity",
  value: "4",
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

interface WeatherState {
  forecast: WeatherStats[];
  todaysHighlights: Highlight[];
  location: string;
}

const initialState: WeatherState = {
  location: "Saint-Petersburg",
  forecast: [
    {
      temperature: 12,
      minTemperature: 10,
      maxTemperature: 14,
      weatherType: WeatherType.SNOW,
    },
    {
      temperature: 14,
      minTemperature: 11,
      maxTemperature: 17,
      weatherType: WeatherType.HAIL,
    },
    {
      temperature: 16,
      minTemperature: 15,
      maxTemperature: 17,
      weatherType: WeatherType.CLEAR,
    },
    {
      temperature: 12,
      minTemperature: 10,
      maxTemperature: 13,
      weatherType: WeatherType.SHOWER,
    },
    {
      temperature: 11,
      minTemperature: 10,
      maxTemperature: 13,
      weatherType: WeatherType.HEAVY_RAIN,
    },
  ],
  todaysHighlights: [wind, humidity, visibility, airPressure],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    updateLocation(
      state: WeatherState,
      action: PayloadAction<string>
    ) {
      state.location = action.payload;
    },
  },
});

export const weatherActions = weatherSlice.actions;
export const weatherReducer = weatherSlice.reducer;
