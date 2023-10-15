import 'react-native';
import React from 'react';
import RecipesPage from '../../../src/screens/RecipesPage';
import {render} from '@testing-library/react-native';

describe('recipes page', () => {
  it('should render recipes page', async () => {
    const page = render(<RecipesPage />);
    const recipesList = page.getByTestId('recipesList');
    expect(recipesList).toBeTruthy();
  });
});
