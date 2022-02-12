import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleContainer, StyledText, StyledTextContainer} from './styles';
import Lists from './List';
const CategoryScreen = ({route, navigation}) => {
  return (
    <StyleContainer>
      <StyledTextContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <StyledText>Pixel List Screen </StyledText>
        </TouchableOpacity>
      </StyledTextContainer>
      <Lists navigation={navigation} route={route} />
    </StyleContainer>
  );
};
export default CategoryScreen;
