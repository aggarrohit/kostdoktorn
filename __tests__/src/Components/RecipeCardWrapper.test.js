import React from 'react';
import {View, TouchableOpacity, Dimensions} from 'react-native';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import RecipeCardWrapper from '../../../src/components/RecipeCardWrapper';
import RecipeListData from '../../../src/data/recipes-list.json';
import {act} from 'react-test-renderer';

jest.useFakeTimers();

const sampleRecipe = RecipeListData[0];
const {width: SCREEN_WIDTH} = Dimensions.get('window');

const RecipeCardMock = ({recipe, onMenuButtonPressed, index}) => {
  return (
    <View testID={`recipeCard-${index}`}>
      <TouchableOpacity
        testID={`recipeOptionsButton-${index}`}
        onPress={onMenuButtonPressed}
      />
    </View>
  );
};

describe('RecipeCardWrapper component', () => {
  test('recipe card moves to left when menu button is pressed', async () => {
    const WrappedRecipeCardComponent = render(
      <RecipeCardWrapper
        Children={RecipeCardMock}
        recipe={sampleRecipe}
        index={0}
      />,
    );

    const moveButton = WrappedRecipeCardComponent.getByTestId(
      'recipeOptionsButton-0',
    );

    const recipeAnimatedView = WrappedRecipeCardComponent.getByTestId(
      'recipeAnimatedView-0',
    );

    await act(async () => {
      fireEvent.press(moveButton);
    });

    await waitFor(() => {
      const translate = recipeAnimatedView.props.style.transform[0].translateX;
      expect(translate).toBe(-SCREEN_WIDTH * 0.5);
    });

    expect(moveButton).toBeTruthy();
    expect(recipeAnimatedView).toBeTruthy();
  });
});
