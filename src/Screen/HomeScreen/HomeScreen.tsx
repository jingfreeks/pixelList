import React from 'react';
import {
  StyleContainer,
  StyledText,
  StyledTextContainer,
  StyledSearchContainer,
  StyledTextInput,
  ButtonStyledSearch,
  StyledTextSearch,
  StyledSearchButtonContainer,
} from './styles';
import Lists from './List';
import usePixelList from './hooks';

const HomeScreen = ({navigation}) => {
  const {searchText, handleFilterSearch, handleSearchText} =
    usePixelList(navigation);
  console.log('searchText', searchText);
  return (
    <StyleContainer>
      <StyledTextContainer>
        <StyledText>Pixel List Screen </StyledText>
      </StyledTextContainer>
      <StyledSearchContainer>
        <StyledText>Search</StyledText>
        <StyledTextInput onChangeText={handleSearchText} value={searchText} />
        <StyledSearchButtonContainer>
          <ButtonStyledSearch onPress={() => handleFilterSearch(searchText)}>
            <StyledTextSearch>View</StyledTextSearch>
          </ButtonStyledSearch>
        </StyledSearchButtonContainer>
      </StyledSearchContainer>
      <Lists navigation={navigation} />
    </StyleContainer>
  );
};
export default HomeScreen;
