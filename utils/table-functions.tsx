import { AnyAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { updateBaseballHomeDivisionData } from "../redux/reducers/baseball/division/baseballHomeDivision2017";
import { updateBaseballHomeDivision2022Data } from "../redux/reducers/baseball/division/baseballHomeDivision2022";
import { updateBaseballHomeNonDivisionData } from "../redux/reducers/baseball/non-division/baseballHomeNonDivision2017";
import { updateBaseballHomeNonDivision2022Data } from "../redux/reducers/baseball/non-division/baseballHomeNonDivision2022";
import { BASEBALL_TABLE_NAMES } from "./enums";
import { PayloadData } from "./types/types";
import { updateBaseballHomeDivisionFullData } from "../redux/reducers/baseball/division/baseballHomeDivision2017";
import { updateBaseballHomeDivision2022FullData } from "../redux/reducers/baseball/division/baseballHomeDivision2022";
import { updateBaseballHomeNonDivisionFullData } from "../redux/reducers/baseball/non-division/baseballHomeNonDivision2017";
import { updateBaseballHomeNonDivision2022FullData } from "../redux/reducers/baseball/non-division/baseballHomeNonDivision2022";
import {
  updateBaseballVisitorNonDivision2022Data,
  updateBaseballVisitorNonDivision2022FullData,
} from "../redux/reducers/baseball/non-division/baseballVisitorNonDivision2022";
import {
  updateBaseballVisitorDivisionData,
  updateBaseballVisitorDivisionFullData,
} from "../redux/reducers/baseball/division/baseballVisitorDivision2017";
import {
  updateBaseballVisitorNonDivision2017Data,
  updateBaseballVisitorNonDivision2017FullData,
} from "../redux/reducers/baseball/non-division/baseballVisitorNonDivision";
import {
  updateBaseballVisitorDivision2022Data,
  updateBaseballVisitorDivision2022FullData,
} from "../redux/reducers/baseball/division/baseballVisitorDivision2022";

function updateBaseballTable(
  dispatch: Dispatch<AnyAction>,
  baseballTableName: string,
  cellInfo: PayloadData
): void {
  switch (baseballTableName) {
    case BASEBALL_TABLE_NAMES.baseballHomeNonDivision:
      return dispatch(updateBaseballHomeNonDivisionData(cellInfo));
    case BASEBALL_TABLE_NAMES.baseballHomeDivision:
      return dispatch(updateBaseballHomeDivisionData(cellInfo));
    case BASEBALL_TABLE_NAMES.baseballHomeNonDivision2022:
      return dispatch(updateBaseballHomeNonDivision2022Data(cellInfo));
    case BASEBALL_TABLE_NAMES.baseballHomeDivision2022:
      return dispatch(updateBaseballHomeDivision2022Data(cellInfo));
    case BASEBALL_TABLE_NAMES.baseballVisitorNonDivision:
      return dispatch(updateBaseballVisitorNonDivision2017Data(cellInfo));
    case BASEBALL_TABLE_NAMES.baseballVisitorDivision:
      return dispatch(updateBaseballVisitorDivisionData(cellInfo));
    case BASEBALL_TABLE_NAMES.baseballVisitorNonDivision2022:
      return dispatch(updateBaseballVisitorNonDivision2022Data(cellInfo));
    case BASEBALL_TABLE_NAMES.baseballVisitorDivision2022:
      return dispatch(updateBaseballVisitorDivision2022Data(cellInfo));
    default:
      return;
  }
}

function updateFullBaseballTable(
  dispatch: Dispatch<AnyAction>,
  baseballTableName: string,
  data: PayloadData
): void {
  switch (baseballTableName) {
    case BASEBALL_TABLE_NAMES.baseballHomeNonDivision:
      return dispatch(updateBaseballHomeNonDivisionFullData(data));
    case BASEBALL_TABLE_NAMES.baseballHomeDivision:
      return dispatch(updateBaseballHomeDivisionFullData(data));
    case BASEBALL_TABLE_NAMES.baseballHomeNonDivision2022:
      return dispatch(updateBaseballHomeNonDivision2022FullData(data));
    case BASEBALL_TABLE_NAMES.baseballHomeDivision2022:
      return dispatch(updateBaseballHomeDivision2022FullData(data));
    case BASEBALL_TABLE_NAMES.baseballVisitorNonDivision:
      return dispatch(updateBaseballVisitorNonDivision2017FullData(data));
    case BASEBALL_TABLE_NAMES.baseballVisitorDivision:
      return dispatch(updateBaseballVisitorDivisionFullData(data));
    case BASEBALL_TABLE_NAMES.baseballVisitorNonDivision2022:
      return dispatch(updateBaseballVisitorNonDivision2022FullData(data));
    case BASEBALL_TABLE_NAMES.baseballVisitorDivision2022:
      return dispatch(updateBaseballVisitorDivision2022FullData(data));
    default:
      return;
  }
}

export { updateBaseballTable, updateFullBaseballTable };
