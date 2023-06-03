import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import UserCard from '../components/usercard';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function ProcessingModal(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>
      <View
        style={{
          height: '30%',
          justifyContent: 'flex-end',
          width: '100%',
          flex: 1,
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}></View>
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
});

export default ProcessingModal;
