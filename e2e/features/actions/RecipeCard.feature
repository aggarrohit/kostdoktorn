Feature: Recipe Card actions
    Swipe action on recipe card

    Scenario: Swipe recipe card
        Given I should see the Recipes List 
        When I swipe 'left' the recipe card at 0
        Then Button with label 'Done' should be visible at index 0

    Scenario: Tap recipe card menu button
        Given I should see the Recipes List 
        When I tap menu button of recipe card at 0
        Then Button with label 'Change' should be visible at index 0

    Scenario: Tap recipe card menu button to open and close
        Given I should see the Recipes List 
        Then I tap menu button of recipe card at 0
        Then I tap menu button of recipe card at 0