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

function DeclineRequest({navigation}: RouterProps): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={{marginHorizontal: 30, marginVertical: 20}}>
        <View style={styles.notifLayout}>
          <Text style={styles.notifText}>
            We'll email Shola Ajayi letting them know you decline their request
            for money
          </Text>
        </View>
        <UserCard />
        <View style={styles.amountRlayout}>
          <Text style={styles.amountR}>$70.00</Text>
          <Text>Request-Kindly send me some money</Text>
        </View>
        <View style={styles.textInputLayout}>
          <Text style={{textAlign: 'center', fontSize: 13, marginBottom: 6}}>
            Let shola know the reason you are declining(Optional)
          </Text>
          <TextInput multiline={true} style={styles.textInput} />
        </View>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() =>
              navigation.navigate('Done', {txnStatus: 'declined'})
            }>
            <Text style={styles.btnText}>Decline</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  btn: {
    backgroundColor: '#091849',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    width: '60%',
  },
  btnText: {color: 'white', fontWeight: 'bold', fontSize: 16},
  notifLayout: {
    marginVertical: 60,
    marginHorizontal: 30,
  },
  notifText: {
    textAlign: 'center',
  },
  amountRlayout: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  amountR: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInputLayout: {
    marginVertical: 40,
  },
  textInput: {
    borderColor: 'grey',
    borderWidth: 0.4,
    height: 120,
    padding: 10,
  },
});

export default DeclineRequest;
