import {
  takeLatest,
  put,
  call,
  select,
  spawn,
  cancel,
  all,
} from 'redux-saga/effects';
import {requestListStart, requestListSuccess} from './actions';
import PixelList from 'src/config/api/service/pixelList';

export function* getPixelList() {
  yield put(requestListStart());
  try {
    const reponse = yield call(PixelList.getList);

    yield put(requestListSuccess(response));
  } catch (errorReponse) {
    return [];
  }
}

function* pixelListWatcher(): Generator<any, any, any> {
  yield takeLatest('REQUEST_LIST_SUCCESS', getPixelList);
}
export default pixelListWatcher;
