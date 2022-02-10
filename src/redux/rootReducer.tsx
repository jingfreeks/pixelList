import {combineReducers} from 'redux';
import pixelImg from './pixeImg/reducers';

const appReducer = combineReducers({
  pixelImg,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
