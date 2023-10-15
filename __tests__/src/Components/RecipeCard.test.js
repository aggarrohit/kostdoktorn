import React from 'react';
import RecipeCard from '../../../src/components/RecipeCard';
import {render} from '@testing-library/react-native';
import RecipeListData from '../../../src/data/recipes-list.json';

describe('RecipeCard Component', () => {
  it('should render Recipe Card', async () => {
    const sampleRecipe = RecipeListData[0];

    const componentRecipeCard = render(
      <RecipeCard recipe={sampleRecipe} index={0} onMenuButtonPressed={null} />,
    );
    const recipeCardView = componentRecipeCard.getByTestId('recipeCard-0');
    const title = componentRecipeCard.getByText(sampleRecipe.title);
    const type = componentRecipeCard.getByText(sampleRecipe.type);
    const difficultyLevel = componentRecipeCard.getByText(
      sampleRecipe.difficulty.rating,
    );

    expect(recipeCardView).toBeTruthy();
    expect(title).toBeTruthy();
    expect(difficultyLevel).toBeTruthy();
    expect(type).toBeTruthy();
  });
});
