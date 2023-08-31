import type { Dispatch, PayloadAction } from "@reduxjs/toolkit";
import type { Highlight } from "../models/highlights";
import { createSlice } from "@reduxjs/toolkit";

import getWeatherCondition from "../features/get-weather-condition";
import { WeatherCondition, type WeatherStats } from "../models/weather-stats";

interface WeatherState {
  location: string;
  forecast: (WeatherStats | null)[];
  todaysHighlights?: Highlight[];
}

const initialState: WeatherState = {
  location: "Saint-Petersburg",
  forecast: [
    {
      weatherCondition: WeatherCondition.CLOUDY,
      temperature: "No",
      minTemperature: "No",
      maxTemperature: "No",
    },
    null,
    null,
    null,
    null,
  ],
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setLocation(state: WeatherState, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    setWeather(state: WeatherState, action: PayloadAction<any>) {
      state.forecast = action.payload.map((forecastDay: any) => {
        return {
          temperature: Math.floor(forecastDay.day.avgtemp_c),
          minTemperature: Math.floor(forecastDay.day.mintemp_c),
          maxTemperature: Math.floor(forecastDay.day.maxtemp_c),
          weatherCondition: getWeatherCondition(forecastDay.day.condition.text),
        };
      });
      const date = new Date();
      const today = action.payload[0].hour[date.getHours()];
      state.todaysHighlights = [
        {
          title: "Wind",
          measureUnit: "mph",
          value: today.wind_mph,
          wind: {
            direction: today.wind_dir.slice(0, 2),
            rotationDegree: today.wind_degree,
          },
        },
        {
          title: "Humidity",
          measureUnit: "%",
          value: today.humidity,
        },
        {
          title: "Visibility",
          measureUnit: "miles",
          value: today.vis_miles,
        },
        {
          title: "Air Pressure",
          measureUnit: "mb",
          value: today.pressure_mb,
        },
      ];
    },
  },
});

export const weatherActions = weatherSlice.actions;

export const updateWeatherThunk = (location: string) => {
  return (dispatch: Dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${location}&days=5`,
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(weatherActions.setLocation(data.location.name));
        dispatch(weatherActions.setWeather(data.forecast.forecastday));
      })
      .catch((err: any) => {
        throw new Error(err.message);
      });
  };
};

export const weatherReducer = weatherSlice.reducer;
