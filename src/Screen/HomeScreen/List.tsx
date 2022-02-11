import React from 'react';
import {FlatList} from 'react-native';
import {
  StyledText,
  ContainerImg,
  ImageStyles,
  TagTextStyles,
  TagContainerStyles,
  ButtonStyled,
} from './styles';
import usePixelList from './hooks';

const Lists = () => {
  const {data} = usePixelList();
  const handleTags = item => {
    return (
      <ButtonStyled style={{flex: 1}}>
        <TagContainerStyles>
          <TagTextStyles>{item}</TagTextStyles>
        </TagContainerStyles>
      </ButtonStyled>
    );
  };
  const renderItem = ({item}) => {
    const tagItem = item.tags.split(',');
    return (
      <ContainerImg>
        <ButtonStyled
          onPress={() =>
            navigation.navigate('Details', {
              itemImg: item.webformatURL,
              tags: item.tags,
              author: item.user,
            })
          }>
          <ImageStyles source={{uri: item.previewURL}} />
        </ButtonStyled>
        <StyledText>tags </StyledText>
        {tagItem.map(item => handleTags(item))}
      </ContainerImg>
    );
  };
  return (
    <FlatList
      style={{flex: 1}}
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};
export default Lists;
