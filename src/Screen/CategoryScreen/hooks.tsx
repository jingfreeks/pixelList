import {useEffect} from 'react';
import {getPickelState} from 'src/redux/pixeImg/selectors';
import {searchListStart} from 'src/redux/pixeImg/actions';
import {useDispatch, useSelector} from 'react-redux';
const useCategoryList = route => {
  const {data, loading} = useSelector(getPickelState);
  const dispatch = useDispatch();
  const {search} = route.params;
  useEffect(() => {
    dispatch(searchListStart({search}));
  }, [search]);

  return {
    data,
    loading,
  };
};

export default useCategoryList;
