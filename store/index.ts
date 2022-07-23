import { placeReducer } from './place'
import { locationReducer } from './location'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { place: placeReducer, location: locationReducer }
})

export type RootState = ReturnType<typeof store.getState>
export default store