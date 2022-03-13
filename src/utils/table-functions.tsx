import { AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { updateBaseballHomeNonDivisionData } from '../redux/reducers/baseball/non-division/baseballHomeNonDivision2017'
import { BASEBALL_TABLE_NAMES } from './enums'
import { PayloadData } from './types/types'

function updateBaseballTable(dispatch: Dispatch<AnyAction>, baseballTableName: string, cellInfo: PayloadData): void {
    console.log(baseballTableName)
    switch (baseballTableName) {
        case BASEBALL_TABLE_NAMES.baseballHomeNonDivision:
            return dispatch(updateBaseballHomeNonDivisionData(cellInfo))
        default:
            return
    }
}

export { updateBaseballTable }
