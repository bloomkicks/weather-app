import { placeReducer } from './place'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
  reducer: { place: placeReducer }
})

export default store