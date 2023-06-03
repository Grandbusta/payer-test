import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {StyleSheet, View, ActivityIndicator, Text} from 'react-native';
import UserCard from '../components/usercard';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function ProcessingModal(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.indicatorLayout}>
        <View>
          <ActivityIndicator size={'large'} color={'#0B1849'} />
          <Text style={styles.text}>Transaction</Text>
          <Text style={styles.text}>Processing</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '150%',
    bottom: 0,
    flexDirection: 'column',
  },
  indicatorLayout: {
    height: '30%',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ProcessingModal;
