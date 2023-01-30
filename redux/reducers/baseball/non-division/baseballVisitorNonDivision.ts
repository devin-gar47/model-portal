import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clone } from 'ramda'
import { BASEBALL_TABLE_NAMES, SPORT_NAME } from '../../../../utils/enums'
import { addToInitialState } from '../../../../utils/table'
import { DataType, PayloadData } from '../../../../utils/types/types'
import { initialState } from '../../../initialState'

export const baseballVisitorNonDivision2017 = createSlice({
    name: BASEBALL_TABLE_NAMES.baseballVisitorNonDivision,
    initialState: addToInitialState(initialState, 2017, SPORT_NAME.BASEBALL, false, false),
    reducers: {
        updateBaseballVisitorNonDivision2017Data: (state: DataType[], action: PayloadAction<PayloadData>) => {
            const newObj = clone(state)
            const { rowIndex, columnID, value } = action.payload
            const obj: any = newObj[rowIndex]
            type ObjectKey = keyof typeof obj
            const key = columnID as ObjectKey
            obj[key] = value
            return newObj
        },
        updateBaseballVisitorNonDivision2017FullData: (state: DataType[], action: PayloadAction<any>) => {
            const newObj = clone(action.payload)
            return newObj
        },
    },
})

export const { updateBaseballVisitorNonDivision2017Data, updateBaseballVisitorNonDivision2017FullData } =
    baseballVisitorNonDivision2017.actions

export default baseballVisitorNonDivision2017.reducer
