import React from 'react';
import {Animated, Image, StyleSheet, Text, View} from 'react-native';
import textColorDark from '../constants/Colors';

const BackOptionsCard = ({
  icon,
  backgroundColor,
  title,
  panResponder,
  translateX,
  index,
}) => {
  return (
    <Animated.View
      testID={`BackOptionsCard-${index}-${title}`}
      style={[
        styles.animatedCard,
        {
          backgroundColor: backgroundColor,
        },
        translateX !== 0 && {transform: [{translateX: translateX}]},
      ]}
      {...panResponder.panHandlers}>
      <View style={styles.card}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.title}>{title}</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  animatedCard: {
    position: 'absolute',
    right: '5%',
    zIndex: 2,
    width: '20%',
    height: 250,
    borderTopEndRadius: 25,
    borderBottomEndRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '15%',
  },
  icon: {height: 20, width: 20, marginBottom: 20},
  title: {color: textColorDark, fontWeight: '700'},
  card: {alignItems: 'center'},
});

export default BackOptionsCard;
