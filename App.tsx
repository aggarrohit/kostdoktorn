import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RecipesPage from './src/screens/RecipesPage';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <RecipesPage />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
