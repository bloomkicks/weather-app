import { configureStore } from "@reduxjs/toolkit";
import { currentWeatherReducer } from "./current-weather";
import { forecastWeatherReducer } from "./forecast-weather";

const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    forecastWeather: forecastWeatherReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
