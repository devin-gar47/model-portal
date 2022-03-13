import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clone } from 'ramda'
import { BASEBALL_TABLE_NAMES } from '../../../../utils/enums'
import { DataType, PayloadData } from '../../../../utils/types/types'
import { initialState } from '../../../initialState'

export const baseballHomeNonDivision2022 = createSlice({
    name: BASEBALL_TABLE_NAMES.baseballHomeDivision2022,
    initialState,
    reducers: {
        updateBaseballHomeNonDivision2022Data: (state: DataType[], action: PayloadAction<PayloadData>) => {
            const newObj = clone(state)
            const { rowIndex, columnID, value } = action.payload
            const obj = newObj[rowIndex]
            type ObjectKey = keyof typeof obj
            const key = columnID as ObjectKey
            obj[key] = value
            return newObj
        },
    },
})

export const { updateBaseballHomeNonDivision2022Data } = baseballHomeNonDivision2022.actions

export default baseballHomeNonDivision2022.reducer
