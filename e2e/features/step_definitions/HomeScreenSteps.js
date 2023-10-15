import {Given, When, Then, setDefaultTimeout} from '@cucumber/cucumber';
import {expect, element, by} from 'detox';

setDefaultTimeout(120 * 1000);

Given('I launch the app', async () => {
  console.log('Test Started');
});

Given('I should see the Recipes List', async () => {
  await expect(element(by.id('recipesList'))).toBeVisible();
});

Then(
  'I should see the Recipe card {string} at index {int}',
  async (section, index) => {
    await expect(element(by.id(`${section}-${index}`))).toBeVisible();
  },
);

When('I scroll down the recipes list', async () => {
  await element(by.id('recipesList')).scrollTo('bottom');
});

Then('Recipe at index {int} should be visible', async index => {
  await expect(element(by.id(`recipeCard-${index}`)));
});

When(
  'I swipe {string} the recipe card at {int}',
  async (swipeDirection, index) => {
    await element(by.id(`recipeCard-${index}`)).swipe(swipeDirection);
  },
);

Then(
  'Button with label {string} should be visible at index {int}',
  async (buttonLabel, index) => {
    await expect(
      element(by.id(`BackOptionsCard-${index}-${buttonLabel}`)),
    ).toBeVisible();
  },
);

When('I tap menu button of recipe card at {int}', async index => {
  await element(by.id(`recipeOptionsButton-${index}`)).tap();
});
