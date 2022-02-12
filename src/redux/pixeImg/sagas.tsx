import {takeLatest, put, call} from 'redux-saga/effects';
import {requestListSuccess} from './actions';
import {REQUEST_LIST_START, SEARCH_LIST_START} from './actionTypes';
import PixelList from 'src/config/api/service/pixelList';

export function* getPixelList() {
  try {
    const reponse = yield call(PixelList.getList);
    yield put(requestListSuccess(reponse?.hits));
  } catch (errorReponse) {
    return [];
  }
}

export function* getSearchPixelList({payload}) {
  try {
    const reponse = yield call(PixelList.search, payload.search);
    console.log('payload', payload.search);
    yield put(requestListSuccess(reponse?.hits));
  } catch (errorReponse) {
    console.log('payload', errorReponse);
    return [];
  }
}

export function* pixelListWatcher(): Generator<any, any, any> {
  yield takeLatest(REQUEST_LIST_START, getPixelList);
  yield takeLatest(SEARCH_LIST_START, getSearchPixelList);
}
