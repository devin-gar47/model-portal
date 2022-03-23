import { combineReducers } from 'redux'
import baseballHomeNonDivision2017 from './reducers/baseball/non-division/baseballHomeNonDivision2017'
import baseballHomeDivision2017 from './reducers/baseball/division/baseballHomeDivision2017'
import baseballHomeNonDivision2022 from './reducers/baseball/non-division/baseballHomeNonDivision2022'
import baseballHomeDivision2022 from './reducers/baseball/division/baseballHomeDivision2022'
import userInformation from './reducers/user/user-information'
import homeCalculationTable from './reducers/baseball/calculation-table/home/home-calculation-table'

const rootReducer = combineReducers({
    userInformation,
    homeCalculationTable,
    baseballHomeNonDivision2017,
    baseballHomeDivision2017,
    baseballHomeNonDivision2022,
    baseballHomeDivision2022,
})

export default rootReducer
