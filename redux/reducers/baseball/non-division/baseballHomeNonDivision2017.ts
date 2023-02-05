import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clone } from "ramda";
import { BASEBALL_TABLE_NAMES, SPORT_NAME } from "../../../../utils/enums";
import { addToInitialState } from "../../../../utils/table";
import { DataType, PayloadData } from "../../../../utils/types/types";
import { initialState } from "../../../initialState";

export const baseballHomeNonDivision2017v2 = createSlice({
  name: BASEBALL_TABLE_NAMES.baseballHomeNonDivision,
  initialState: addToInitialState(
    initialState,
    2017,
    SPORT_NAME.BASEBALL,
    true,
    false
  ),
  reducers: {
    updateBaseballHomeNonDivisionData: (
      state: DataType[],
      action: PayloadAction<PayloadData>
    ) => {
      const newObj = clone(state);
      const { rowIndex, columnID, value } = action.payload;
      const obj: any = newObj[rowIndex];
      type ObjectKey = keyof typeof obj;
      const key = columnID as ObjectKey;
      obj[key] = value;
      return newObj;
    },
    updateBaseballHomeNonDivisionFullData: (
      state: DataType[],
      action: PayloadAction<any>
    ) => {
      const newObj = clone(action.payload);
      return newObj;
    },
  },
});

export const {
  updateBaseballHomeNonDivisionData,
  updateBaseballHomeNonDivisionFullData,
} = baseballHomeNonDivision2017v2.actions;

export default baseballHomeNonDivision2017v2.reducer;
