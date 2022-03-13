import { AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { updateBaseballHomeDivisionData } from '../redux/reducers/baseball/division/baseballHomeDivision2017'
import { updateBaseballHomeDivision2022Data } from '../redux/reducers/baseball/division/baseballHomeDivision2022'
import { updateBaseballHomeNonDivisionData } from '../redux/reducers/baseball/non-division/baseballHomeNonDivision2017'
import { updateBaseballHomeNonDivision2022Data } from '../redux/reducers/baseball/non-division/baseballHomeNonDivision2022'
import { BASEBALL_TABLE_NAMES } from './enums'
import { PayloadData } from './types/types'

function updateBaseballTable(dispatch: Dispatch<AnyAction>, baseballTableName: string, cellInfo: PayloadData): void {
    console.log(baseballTableName)
    switch (baseballTableName) {
        case BASEBALL_TABLE_NAMES.baseballHomeNonDivision:
            return dispatch(updateBaseballHomeNonDivisionData(cellInfo))
        case BASEBALL_TABLE_NAMES.baseballHomeDivision:
            return dispatch(updateBaseballHomeDivisionData(cellInfo))
        case BASEBALL_TABLE_NAMES.baseballHomeNonDivision2022:
            return dispatch(updateBaseballHomeNonDivision2022Data(cellInfo))
        case BASEBALL_TABLE_NAMES.baseballHomeDivision2022:
            return dispatch(updateBaseballHomeDivision2022Data(cellInfo))
        default:
            return
    }
}

export { updateBaseballTable }
