import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clone } from 'ramda'
import { BASEBALL_TABLE_NAMES } from '../../../../utils/enums'
import { DataType, PayloadData } from '../../../../utils/types/types'
import { initialState } from '../../../initialState'

export const baseballHomeDivision2017v2 = createSlice({
    name: BASEBALL_TABLE_NAMES.baseballHomeDivision,
    initialState,
    reducers: {
        updateBaseballHomeDivsionData: (state: DataType[], action: PayloadAction<PayloadData>) => {
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

export const { updateBaseballHomeDivsionData } = baseballHomeDivision2017v2.actions

export default baseballHomeDivision2017v2.reducer
