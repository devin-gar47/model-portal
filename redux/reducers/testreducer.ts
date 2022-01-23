import { DataType } from '../../utils/types/types'
import { updateTable } from '../actions/actionCreators'
import { UPDATE_TABLE } from '../actions/actionTypes'

type Action = { type: 'UPDATE_TABLE'; payload: DataType }

function testReducer(initialState: DataType, action: Action) {
  switch (action.type) {
    case UPDATE_TABLE:
      return updateTable({
        ou: '',
        record: '',
        winPercentage: '',
        favRecord: '',
        overFavs: '',
        dogRecord: '',
        notes: '',
      })
    default:
      return {}
  }
}

export default testReducer
