import Place from "../models/Place";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  place: new Place('Helsinki')
}

const placeSlice = createSlice({
  initialState,
  name: 'place',
  reducers: {
    changePlace(state, action: PayloadAction<Place>) {
      const place: Place = action.payload

      state.place = place

      return state
    }    
  }
})

export const placeReducer = placeSlice.reducer
export const placeActions = placeSlice.actions
