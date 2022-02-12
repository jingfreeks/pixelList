import {useEffect} from 'react';
import {getPickelState} from 'src/redux/pixeImg/selectors';
import {requestListStart} from 'src/redux/pixeImg/actions';
import {useDispatch, useSelector} from 'react-redux';
const usePixelList = navigation => {
  const {data, loading} = useSelector(getPickelState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchList = navigation.addListener('focus', () => {
      // do something
      handleFetchData();
    });
    return fetchList;
  }, [navigation]);
  const handleFetchData = () => {
    dispatch(requestListStart());
  };
  return {
    data,
    loading,
    handleFetchData,
  };
};

export default usePixelList;
