import {useEffect, useState} from 'react';
import {getPickelState} from 'src/redux/pixeImg/selectors';
import {requestListStart, searchListStart} from 'src/redux/pixeImg/actions';
import {useDispatch, useSelector} from 'react-redux';
const usePixelList = navigation => {
  const {data, loading} = useSelector(getPickelState);
  const dispatch = useDispatch();
  const [searchText, SetSearchTExt] = useState('');
  useEffect(() => {
    const fetchList = navigation.addListener('focus', () => {
      handleFetchData();
    });
    return fetchList;
  }, [navigation]);
  const handleFetchData = () => {
    dispatch(requestListStart());
  };
  const handleFilterSearch = text => {
    dispatch(searchListStart({search: text}));
  };
  const handleSearchText = text => {
    SetSearchTExt(text);
  };
  return {
    data,
    loading,
    handleFetchData,
    searchText,
    SetSearchTExt,
    handleFilterSearch,
    handleSearchText,
  };
};

export default usePixelList;
