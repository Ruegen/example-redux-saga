import { combineReducers } from 'redux'
import * as TYPES from '../types'

const items = (state = [], action) => {
    switch(action.type) {
        case TYPES.FETCH_ITEMS_SUCCESS:
        return action.data
        default:
        return state
    }
}

const rootReducer = combineReducers({
  items
})

export default rootReducer