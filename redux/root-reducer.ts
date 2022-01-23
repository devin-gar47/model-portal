import { combineReducers } from 'redux';
import testReducer from './reducers/testreducer';

const rootReducer = combineReducers({
    test: testReducer,
});

export default rootReducer;