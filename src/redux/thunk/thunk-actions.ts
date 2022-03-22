import axios from 'axios'
import { updateBaseballTable } from '../../utils/table-functions'
import { PayloadData } from '../../utils/types/types'
import { updateBaseballHomeNonDivisionData } from '../reducers/baseball/non-division/baseballHomeNonDivision2017'

export const saveCellData =
    (
        tableName: string,
        ou: string,
        year: number,
        sport: string,
        home: boolean,
        division: boolean,
        payload: PayloadData
    ) =>
    async (dispatch: any, getState: any) => {
        console.log(ou, year, sport, home, division)
        const { value, columnID, rowIndex } = payload
        const apiPayload = {
            ou,
            year,
            sport,
            home,
            division,
            newCellInfo: {
                columnID: columnID,
                record: value,
            },
        }
        try {
            await axios.put('http://localhost:3030/table/update-row', apiPayload)
            updateBaseballTable(dispatch, tableName, { rowIndex, columnID, value })
            // dispatch(updateBaseballHomeNonDivisionData({ rowIndex, columnID, value }))
        } catch (e) {
            console.log(e)
        }

        return
    }
