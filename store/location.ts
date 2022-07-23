import Location from "../models/Location";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initState: { current: Location } = {
  current: new Location('Helsinki')
}

const locationSlice = createSlice({
  name: 'location',
  initialState: initState,
  reducers: {
    change(state: typeof initState, action: PayloadAction<Location>) {
      state.current = action.payload

      return state
    }
  }
})

export const locationReducer = locationSlice.reducer
export const locationActions = locationSlice.actions 