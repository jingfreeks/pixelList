import {TagTextStyles, TagContainerStyles, ButtonStyled} from './styles';
import React from 'react';

const TagsScreen = ({navigation, item}) => {
  return (
    <ButtonStyled
      onPress={() => navigation.navigate('Category', {search: item})}>
      <TagContainerStyles>
        <TagTextStyles>{item}</TagTextStyles>
      </TagContainerStyles>
    </ButtonStyled>
  );
};
export default TagsScreen;
