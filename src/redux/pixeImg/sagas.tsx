import {
  takeLatest,
  put,
  call,
  select,
  spawn,
  cancel,
  all,
} from 'redux-saga/effects';
import {requestListSuccess} from './actions';
import {REQUEST_LIST_START} from './actionTypes';
import PixelList from 'src/config/api/service/pixelList';

export function* getPixelList() {
  try {
    const reponse = yield call(PixelList.getList);
    yield put(requestListSuccess(reponse?.hits));
  } catch (errorReponse) {
    return [];
  }
}

export function* pixelListWatcher(): Generator<any, any, any> {
  yield takeLatest(REQUEST_LIST_START, getPixelList);
}

export function* pixelLisSagas() {
  yield all([call(pixelListWatcher)]);
}
