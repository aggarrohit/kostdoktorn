import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import RecipeDataItem from './RecipeDataItem';
import StarIcon from '../assets/star.png';
import TimeIcon from '../assets/time.png';
import MenuIcon from '../assets/menu.png';
import Colors from '../constants/Colors';

const RecipeCard = ({recipe, onMenuButtonPressed, index}) => {
  return (
    <View style={styles.row} testID={`recipeCard-${index}`}>
      <View style={styles.recipeCard}>
        {/* recipe main image */}
        <Image
          style={styles.recipeImage}
          source={{uri: recipe.image}}
          testID={`recipeImage-${index}`}
        />
        <View style={styles.recipeInfo}>
          <View style={styles.recipeCardHeader}>
            {/* recipe title */}
            <Text
              numberOfLines={1}
              style={styles.recipeTitle}
              testID={`recipeTitle-${index}`}>
              {recipe.title}
            </Text>
            {/* recipe menu button */}
            <TouchableOpacity
              testID={`recipeOptionsButton-${index}`}
              style={styles.menuButton}
              onPress={onMenuButtonPressed}>
              <Image source={MenuIcon} style={styles.menuButton} />
            </TouchableOpacity>
          </View>
          {/* recipe data like rating, time & difficulty level */}
          <View style={styles.recipeData}>
            <RecipeDataItem
              icon={StarIcon}
              title={recipe.rating}
              testID={`recipeRating-${index}`}
            />
            <RecipeDataItem
              testID={`recipeTime-${index}`}
              icon={TimeIcon}
              title={recipe.time.preparation + recipe.time.cook + ' min'}
            />
            <Text
              testID={`recipeDifficultyLevel-${index}`}
              style={[styles.recipeDataItem, styles.capitalize]}>
              {recipe.difficulty.rating}
            </Text>
          </View>
        </View>
        {/* overlapping label on recipe image to show type */}
        <Text style={styles.recipeType} testID={`recipeType-${index}`}>
          {recipe.type}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  row: {
    flex: 1,
    width: '95%',
  },
  recipeImage: {
    width: '100%',
    height: 175,
    backgroundColor: '#eee',
    overflow: 'hidden',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  recipeInfo: {
    padding: 10,
  },
  recipeCard: {
    flex: 1,
    height: 250,
    backgroundColor: '#fff',
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    margin: 20,
    borderRadius: 25,
  },
  recipeCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  menuButton: {
    width: 20,
    height: 20,
  },
  recipeTitle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    marginBottom: 5,
    color: Colors.textColorDark,
    letterSpacing: 1,
    width: '80%',
  },
  recipeDataItem: {
    flexDirection: 'row',
    fontSize: 16,
    marginBottom: 5,
    marginRight: 30,
    alignItems: 'center',
    color: Colors.textColorMedium,
  },
  recipeData: {
    flexDirection: 'row',
  },
  recipeType: {
    backgroundColor: '#0E6E2B',
    color: 'white',
    textTransform: 'uppercase',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 30,
    position: 'absolute',
    margin: 20,
    letterSpacing: 1.75,
  },
  capitalize: {textTransform: 'capitalize'},
});

export default RecipeCard;
