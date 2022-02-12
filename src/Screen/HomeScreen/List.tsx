import React from 'react';
import {FlatList, ActivityIndicator} from 'react-native';
import usePixelList from './hooks';
import {TagsScreen} from 'src/component/Tags';
import {PixelList} from 'src/component/PixelList';

const Lists = ({navigation}) => {
  const {data, loading, handleFetchData} = usePixelList(navigation);
  const handleTags = item => {
    return <TagsScreen item={item} navigation={navigation} />;
  };
  const renderItem = ({item}) => {
    return (
      <>
        <PixelList
          navigation={navigation}
          item={item}
          handleTags={handleTags}
        />
      </>
    );
  };
  if (loading) {
    return <ActivityIndicator color="#0000ff" />;
  }

  return (
    <FlatList
      style={{flex: 1}}
      data={data}
      extraData={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onRefresh={handleFetchData}
      refreshing={loading}
    />
  );
};
export default Lists;
