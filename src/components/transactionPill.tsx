import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
interface RouterProps {
  navigation: NavigationProp<any, any>;
}
function TransactionPill({navigation}: RouterProps): JSX.Element {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Request_details');
      }}>
      <View style={styles.sectionContainer}>
        <View style={styles.requestContainer}>
          <View style={styles.avatarNameView}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>SA</Text>
            </View>
            <View>
              <Text style={styles.name}>Shola Ajayi</Text>
              <Text style={styles.date}>April 6, 2023 9:56AM</Text>
            </View>
          </View>
          <View>
            <Text style={styles.amount}>$70.00</Text>
            <Text style={styles.viewLink}>VIEW</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginVertical: 4,
    paddingHorizontal: 24,
  },
  requestContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 14,
    borderBottomWidth: 0.2,
  },
  amount: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  viewLink: {
    alignSelf: 'flex-end',
    fontSize: 14,
    color: 'blue',
  },
  name: {
    fontSize: 18,
    marginBottom: 6,
  },
  date: {
    fontSize: 14,
    color: 'grey',
  },
  avatar: {
    backgroundColor: '#E50204',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 100,
    height: 50,
    width: 50,
  },
  avatarNameView: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TransactionPill;
