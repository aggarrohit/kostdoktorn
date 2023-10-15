Feature: Recipe List actions
    Scroll action on recipe list

    Scenario: Scroll down recipe list
        Given I should see the Recipes List 
        When I scroll down the recipes list
        Then Recipe at index 4 should be visible