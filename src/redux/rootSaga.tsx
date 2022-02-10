import {all} from 'redux-saga/effects';
import pixeImgSagas from './pixeImg/sagas';

export default function* rootSaga(): Generator<any, void, any> {
  yield all([pixeImgSagas]);
}
