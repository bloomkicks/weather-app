import Location from "../models/Location";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  place: new Location('Helsinki')
}

const placeSlice = createSlice({
  initialState,
  name: 'place',
  reducers: {
    changePlace(state, action: PayloadAction<Location>) {
      const place: Location = action.payload

      state.place = place

      return state
    }    
  }
})

export const placeReducer = placeSlice.reducer
export const placeActions = placeSlice.actions
