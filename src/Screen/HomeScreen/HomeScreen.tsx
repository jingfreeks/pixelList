import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import {StyledView} from './styles';

const HomeScreen = ({navigation}) => {
  return (
    <StyledView>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Home Screen </Text>
      </TouchableOpacity>
    </StyledView>
  );
};
export default HomeScreen;
