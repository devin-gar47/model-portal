import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clone } from 'ramda'
import { BASEBALL_TABLE_NAMES, SPORT_NAME } from '../../../../utils/enums'
import { addToInitialState } from '../../../../utils/table'
import { DataType, PayloadData } from '../../../../utils/types/types'
import { initialState } from '../../../initialState'

export const baseballHomeDivision2022 = createSlice({
    name: BASEBALL_TABLE_NAMES.baseballHomeDivision2022,
    initialState: addToInitialState(initialState, 2022, SPORT_NAME.BASEBALL, true, true),
    reducers: {
        updateBaseballHomeDivision2022Data: (state: DataType[], action: PayloadAction<PayloadData>) => {
            const newObj = clone(state)
            const { rowIndex, columnID, value } = action.payload
            const obj: any = newObj[rowIndex]
            type ObjectKey = keyof typeof obj
            const key = columnID as ObjectKey
            obj[key] = value
            return newObj
        },
        updateBaseballHomeDivision2022FullData: (state: DataType[], action: PayloadAction<any>) => {
            const newObj = clone(action.payload)
            return newObj
        },
    },
})

export const { updateBaseballHomeDivision2022Data, updateBaseballHomeDivision2022FullData } =
    baseballHomeDivision2022.actions

export default baseballHomeDivision2022.reducer
