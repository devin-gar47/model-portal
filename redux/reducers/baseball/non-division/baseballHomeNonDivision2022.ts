import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clone } from "ramda";
import { BASEBALL_TABLE_NAMES, SPORT_NAME } from "../../../../utils/enums";
import { addToInitialState } from "../../../../utils/table";
import { DataType, PayloadData } from "../../../../utils/types/types";
import { initialState } from "../../../initialState";

export const baseballHomeNonDivision2022 = createSlice({
  name: BASEBALL_TABLE_NAMES.baseballHomeDivision2022,
  initialState: addToInitialState(
    initialState,
    2022,
    SPORT_NAME.BASEBALL,
    true,
    false
  ),
  reducers: {
    updateBaseballHomeNonDivision2022Data: (
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
    updateBaseballHomeNonDivision2022FullData: (
      state: DataType[],
      action: PayloadAction<any>
    ) => {
      const newObj = clone(action.payload);
      return newObj;
    },
  },
});

export const {
  updateBaseballHomeNonDivision2022Data,
  updateBaseballHomeNonDivision2022FullData,
} = baseballHomeNonDivision2022.actions;

export default baseballHomeNonDivision2022.reducer;
