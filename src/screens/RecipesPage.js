import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import RecipesList from '../data/recipes-list.json';
import RecipeCard from '../components/RecipeCard';
import backgroundColor from '../constants/Colors';
import RecipeCardWrapper from '../components/RecipeCardWrapper';

export default function RecipesPage() {
  return (
    <View style={styles.container}>
      <FlatList
        testID="recipesList"
        style={styles.list}
        data={RecipesList}
        renderItem={({item, index}) => (
          <RecipeCardWrapper
            Children={RecipeCard}
            recipe={item}
            index={index}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: backgroundColor,
  },
  list: {
    flex: 1,
    width: '100%',
  },
});
