import React from 'react';
import RecipeDataItem from '../../../src/components/RecipeDataItem';
import {render} from '@testing-library/react-native';

describe('RecipeDataItem Component', () => {
  it('should render Recipe Data Item', async () => {
    const componentRecipeDataItem = render(
      <RecipeDataItem
        icon={null}
        title={'30 mins'}
        testID={'RecipeDataItem-0'}
      />,
    );
    const recipeDataItemView =
      componentRecipeDataItem.getByTestId('RecipeDataItem-0');
    const title = componentRecipeDataItem.getByText('30 mins');

    expect(recipeDataItemView).toBeTruthy();
    expect(title).toBeTruthy();
  });
});
