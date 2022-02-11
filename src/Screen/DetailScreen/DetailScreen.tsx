import React from 'react';
import {Image, ScrollView} from 'react-native';
import {StyledText} from './styles';

const DetailsScreen = ({route}) => {
  const {itemImg, tags, author} = route.params;
  console.log('itemImg', itemImg);
  return (
    <ScrollView style={{flex: 1}}>
      <Image source={{uri: itemImg}} resizeMode="cover" style={{height: 600}} />
      <StyledText>Author : {author}</StyledText>
      <StyledText>Tags : {tags}</StyledText>
    </ScrollView>
  );
};
export default DetailsScreen;
