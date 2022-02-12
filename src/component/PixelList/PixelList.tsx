import React from 'react';
import {
  StyledText,
  ContainerImg,
  ImageStyles,
  ButtonStyled,
  IconContainer,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
const PixelList = ({navigation, item, handleTags}) => {
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
      <IconContainer>
        <Icon name="thumbs-up" size={20} color={'grey'} />
        <StyledText>{item.likes} </StyledText>
        <Icon name="eye" size={20} color={'grey'} />
        <StyledText>{item.likes} </StyledText>
      </IconContainer>

      <StyledText>tags </StyledText>
      {tagItem.map(item => handleTags(item))}
    </ContainerImg>
  );
};
export default PixelList;
