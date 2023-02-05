import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clone } from "ramda";

export const homeCalculationTable = createSlice({
  name: "home-calculation-table",
  initialState: [
    {
      game: "CWS/DET",
      road_ml: "-245",
      home_ml: "175",
      pick: "DOG",
      ou: "9",
      g1: "YES",
      division_game: "NO",
      line: "1.5",
      over_odds: "90",
      implied_over_probability: "",
      under_odds: "-125",
      implied_under_probability: "",
      true_over_probability: "",
      true_under_probability: "",
      suggestion: "",
    },
  ],
  reducers: {
    updateHomeCalculationsTable: (state: any, action: PayloadAction<any>) => {
      let newObj = clone(state);
      newObj = action.payload;
      return newObj;
    },
  },
});

export const { updateHomeCalculationsTable } = homeCalculationTable.actions;

export default homeCalculationTable.reducer;
