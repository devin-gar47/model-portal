import { combineReducers } from 'redux'
import baseballHomeNonDivision2017 from './reducers/baseball/non-division/baseballHomeNonDivision2017'
import baseballHomeDivision2017 from './reducers/baseball/division/baseballHomeDivision2017'

const rootReducer = combineReducers({
    baseballHomeNonDivision2017,
    baseballHomeDivision2017,
})

export default rootReducer
