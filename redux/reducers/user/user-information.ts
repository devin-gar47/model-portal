import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clone } from 'ramda'

interface UserInfo {
    token: string
}

export const userInformation = createSlice({
    name: 'USER_INFO',
    initialState: { token: '' },
    reducers: {
        storeToken: (state: UserInfo, action: PayloadAction<string>) => {
            const newObj = clone(state)
            newObj.token = action.payload
            return newObj
        },
    },
})

export const { storeToken } = userInformation.actions

export default userInformation.reducer
