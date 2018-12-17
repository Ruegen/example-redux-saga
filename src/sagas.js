import { takeLatest } from 'redux-saga/effects'
import * as TYPES from './types'

import {fetchItems} from './actions/index'

function* mySaga () {
  yield takeLatest(TYPES.FETCH_ITEMS_REQUEST, fetchItems)
}

export default mySaga