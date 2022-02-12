import {all, call} from 'redux-saga/effects';
import {pixelListWatcher} from './pixeImg/sagas';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([call(pixelListWatcher)]);
}
