import React from 'react';
import {TouchableOpacity} from 'react-native';
import {StyleContainer, StyledText, StyledTextContainer} from './styles';
import Lists from './List';
const HomeScreen = ({navigation}) => {
  return (
    <StyleContainer>
      <StyledTextContainer>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <StyledText>Pixel List Screen </StyledText>
        </TouchableOpacity>
      </StyledTextContainer>
      <Lists navigation={navigation} />
    </StyleContainer>
  );
};
export default HomeScreen;
