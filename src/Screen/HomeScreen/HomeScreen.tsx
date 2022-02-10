import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Styled from 'styled-components/native';
import {StyledView} from './styles';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = ({navigation}) => {
  const state = useSelector(state => state);
  console.log('state', state);
  return (
    <StyledView>
      <TouchableOpacity onPress={() => navigation.navigate('Details')}>
        <Text>Home Screen </Text>
      </TouchableOpacity>
    </StyledView>
  );
};
export default HomeScreen;
