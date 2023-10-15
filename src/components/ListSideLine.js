import React from 'react';
import {StyleSheet, View} from 'react-native';
import Colors from '../constants/Colors';

const ListSideLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.verticalLine} />
      <View style={styles.outerCircle}>
        <View style={styles.innerCircle} />
      </View>
      <View style={styles.verticalLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 30,
    alignItems: 'center',
  },
  outerCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: Colors.textColorLight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  verticalLine: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.textColorLight,
  },
  innerCircle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: 'white',
  },
});

export default ListSideLine;
