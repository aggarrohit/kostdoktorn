import React, {useState} from 'react';
import {
  View,
  PanResponder,
  Animated,
  Dimensions,
  StyleSheet,
} from 'react-native';
import ListSideLine from './ListSideLine';
import BackOptionsCard from './BackOptionsCard';
import MenuIcon from '../assets/menu.png';
import ChangeIcon from '../assets/change.png';
import DoneIcon from '../assets/done.png';
import Colors from '../constants/Colors';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

const RecipeCardWrapper = ({Children, recipe, index}) => {
  const [pan] = useState(new Animated.ValueXY());
  const changeViewTranslateX = Animated.divide(pan.x, 10 / 3);
  const doneViewTranslateX = Animated.divide(pan.x, 5 / 3);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => false,
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      // Determine if the user is swiping horizontally
      const horizontalSwipeThreshold = 10;
      return Math.abs(gestureState.dx) > horizontalSwipeThreshold;
    },
    onPanResponderMove: Animated.event([null, {dx: pan.x}], {
      useNativeDriver: false,
      listener: (event, gestureState) => {
        if (gestureState.dx < -SCREEN_WIDTH / 10) {
          open();
        } else if (gestureState.dx > 0) {
          pan.setValue({x: 0, y: 0});
        }
      },
    }),
  });

  const open = () => {
    Animated.timing(pan, {
      toValue: -SCREEN_WIDTH * 0.5,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  const onMenuButtonPressed = () => {
    Animated.timing(pan, {
      toValue: pan.x._value < -20 ? 0 : -SCREEN_WIDTH * 0.5,
      duration: 500,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={styles.container}>
      <ListSideLine />
      <BackOptionsCard
        backgroundColor={Colors.moreCardBackgroundColor}
        icon={MenuIcon}
        title={'More'}
        panResponder={panResponder}
        translateX={0}
        index={index}
      />
      <BackOptionsCard
        backgroundColor={Colors.changeCardBackgroundColor}
        icon={ChangeIcon}
        title={'Change'}
        panResponder={panResponder}
        translateX={changeViewTranslateX}
        index={index}
      />
      <BackOptionsCard
        backgroundColor={Colors.doneCardBackgroundColor}
        icon={DoneIcon}
        title={'Done'}
        panResponder={panResponder}
        translateX={doneViewTranslateX}
        index={index}
      />
      {/* swipeable recipe card */}
      <Animated.View
        testID={`recipeAnimatedView-${index}`}
        style={[{transform: [{translateX: pan.x}]}, styles.recipeCardHolder]}
        {...panResponder.panHandlers}>
        <Children
          recipe={recipe}
          index={index}
          onMenuButtonPressed={onMenuButtonPressed}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  recipeCardHolder: {
    zIndex: 3,
    width: '100%',
  },
});

export default RecipeCardWrapper;
