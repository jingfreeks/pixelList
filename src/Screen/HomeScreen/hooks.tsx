import {useEffect} from 'react';
import {getPickelState} from 'src/redux/pixeImg/selectors';
import {requestListStart} from 'src/redux/pixeImg/actions';
import {useDispatch, useSelector} from 'react-redux';
const usePixelList = () => {
  const {data} = useSelector(getPickelState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestListStart());
  }, []);

  return {
    data,
  };
};

export default usePixelList;
