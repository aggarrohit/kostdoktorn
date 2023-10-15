import {gql} from '@apollo/client';

const NUTRITION_FRAGMENT = gql`
  fragment NutritionFragment on Nutrition {
    values {
      carbs
      fat
      protein
      fiber
      calories
    }
    percentages {
      carbs
      fat
      protein
    }
  }
`;

const BASE_RECIPE_FRAGMENT = gql`
  fragment BaseRecipe on Recipe {
    id
    isMembersOnly
    title
    description
    rating
    modifiedAt
    slug
    nutrition {
      ...NutritionFragment
    }
    time {
      preparation
      cook
    }
    difficulty {
      rating
      value
    }
    images {
      hz
      vt
      brightness
    }
    tags {
      id
      type
      title
    }
    servings {
      default
      allowed
    }
    strictness {
      rating
      value
    }
    instructionSections {
      title
      header {
        text
      }
      footer {
        text
      }
      steps
    }
    tips {
      header
      content
    }
    videos {
      id
      type
    }
  }
`;

const FREE_RECIPES_QUERY = gql`
  query GetRecipes(
    $page: Int
    $pageSize: Int
    $tagFilters: [String]
    $premiumOnly: Boolean
    $includePremiumPreview: Boolean
  ) {
    listRecipes(
      input: {
        page: $page
        pageSize: $pageSize
        tagFilters: $tagFilters
        premiumOnly: $premiumOnly
        includePremiumPreview: $includePremiumPreview
      }
    ) {
      recipes {
        ...BaseRecipe
      }
      totalSize
      nextPage
    }
  }
  ${NUTRITION_FRAGMENT}
  ${BASE_RECIPE_FRAGMENT}
`;

export default FREE_RECIPES_QUERY;
