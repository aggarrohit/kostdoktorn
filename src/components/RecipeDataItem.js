import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import colors from '../constants/Colors';

const RecipeDataItem = ({icon, title, testID}) => {
  return (
    <View style={styles.recipeDataItem} testID={testID}>
      <Image source={icon} style={styles.recipeDataItemIcon} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeDataItem: {
    flexDirection: 'row',
    fontSize: 16,
    marginBottom: 5,
    marginRight: 30,
    alignItems: 'center',
  },
  recipeDataItemIcon: {
    height: 15,
    width: 15,
    marginRight: 10,
  },
  title: {
    color: colors.textColorMedium,
  },
});

export default RecipeDataItem;
