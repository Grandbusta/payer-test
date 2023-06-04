import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import TransactionPill from '../components/transactionPill';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function Notifications({navigation}: RouterProps): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ScrollView>
        <TransactionPill navigation={navigation} />
        <TransactionPill navigation={navigation} />
      </ScrollView>
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
