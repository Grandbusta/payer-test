import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TransactionPill from './src/components/transactionPill';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TransactionPill />
      <TransactionPill />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#F5F9FC',
    flex: 1,
  },
});

export default App;
