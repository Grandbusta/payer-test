import React, {useState} from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import ProcessingModal from '../components/processingModal';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function Pay({navigation}: RouterProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={styles.layout}>
        <Text>Add a Credit Card</Text>
        <View style={{marginVertical: 20}}>
          <TextInput placeholder="Card Number" style={styles.textInput} />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              placeholder="Expiry Date"
              style={{...styles.textInput, flexBasis: '50%'}}
            />
            <TextInput
              placeholder="CVV"
              style={{...styles.textInput, flexBasis: '45%'}}
            />
          </View>
          <TextInput placeholder="CardHolder Name" style={styles.textInput} />
          <TextInput placeholder="Billing Address" style={styles.textInput} />
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              setShowModal(true);
              // navigation.navigate('Done', {txnStatus: 'accepted'})
            }}>
            <Text style={styles.btnText}>Pay</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showModal && <ProcessingModal />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  layout: {
    marginHorizontal: 30,
    marginTop: 40,
  },
  textInput: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#F1F0F4',
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '500',
  },
  btn: {
    backgroundColor: '#091849',
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    width: '100%',
  },
  btnText: {color: 'white', fontWeight: 'bold', fontSize: 16},
  notifLayout: {
    marginVertical: 60,
    marginHorizontal: 30,
  },
});

export default Pay;
