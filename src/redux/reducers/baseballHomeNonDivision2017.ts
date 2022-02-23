import { Action, AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clone } from 'ramda'
import { DataType } from '../../../utils/types/types'
import { initialState } from '../initialState'

interface payloadData {
    rowIndex: number
    columnID: string
    value: string
}

export const baseballHomeNonDivision2017v2 = createSlice({
    name: 'baseball home non division',
    initialState,
    reducers: {
        updateData: (state: DataType[], action: PayloadAction<payloadData>) => {
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

export const { updateData } = baseballHomeNonDivision2017v2.actions

export default baseballHomeNonDivision2017v2.reducer
