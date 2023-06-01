import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {SafeAreaView, StyleSheet} from 'react-native';
import TransactionPill from '../components/transactionPill';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function Notifications({navigation}: RouterProps): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <TransactionPill navigation={navigation} />
      <TransactionPill navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#F5F9FC',
    flex: 1,
  },
});

export default Notifications;
