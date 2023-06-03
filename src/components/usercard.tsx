import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

interface RouterProps {}
function UserCard({}: RouterProps): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: '#FBFBFB',
        padding: 20,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={require('../assets/avatar.jpeg')}
        style={{width: 80, height: 80, borderRadius: 100}}
      />
      <View style={{marginLeft: 10}}>
        <Text style={{fontSize: 16, marginBottom: 6}}>Shola Ajayi</Text>
        <Text style={{color: 'grey', fontSize: 12, marginBottom: 6}}>
          +43212323456
        </Text>
        <Text style={{color: 'grey', fontSize: 12, marginBottom: 6}}>
          peterfajemisin@gmail.com
        </Text>
      </View>
    </View>
  );
}

export default UserCard;
