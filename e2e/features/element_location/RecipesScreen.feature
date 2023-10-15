Feature: Element matcher
    Elements can be located by ids


    Scenario: List elements can be matched dynamically
        Then I should see the Recipe card '<section>' at index 0

        Examples:
            | section |
            | recipeCard |
            | recipeImage |
            | recipeTitle |
            | recipeDifficultyLevel |
            | recipeType |
            | recipeOptionsButton |
            | recipeRating |
            | recipeTime |


   