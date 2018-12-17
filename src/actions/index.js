import {call, put} from 'redux-saga/effects'
import * as TYPES from '../types'

const api = (url) => fetch(url).then(res => res.json())

export function* fetchItems(action) {
  try {
    const url = 'http://localhost:4000/items'
    const items = yield call(api, url)
    yield put({type: TYPES.FETCH_ITEMS_SUCCESS, data: items})
  } catch (e) {
    console.error(e)
  }
}