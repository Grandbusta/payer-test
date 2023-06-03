import React from 'react';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import UserCard from '../components/usercard';
import Icon from 'react-native-vector-icons/AntDesign';

interface RouterProps {
  navigation: NavigationProp<any, any>;
  route: RouteProp<{Done: {txnStatus: string}}, 'Done'>;
}

function Done({route, navigation}: RouterProps): JSX.Element {
  const {txnStatus} = route.params;
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={{marginHorizontal: 30, marginVertical: 20}}>
        <UserCard />
        <View style={styles.detailsLayout}>
          <View style={styles.detailsRow}>
            <View>
              <Text style={styles.detailsTitle}>You pay</Text>
              <Text style={styles.detailsValue}>GPB 70.00</Text>
            </View>
            <View>
              <Text style={{...styles.detailsTitle, textAlign: 'right'}}>
                Receiver gets
              </Text>
              <Text style={styles.detailsValue}>NGN 40,204.98</Text>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <View>
              <Text style={styles.detailsTitle}>Fee</Text>
              <Text style={styles.detailsValue}>GPB 1.00</Text>
            </View>
            <View>
              <Text style={{...styles.detailsTitle, textAlign: 'right'}}>
                Fee included
              </Text>
              <Text style={{...styles.detailsValue, textAlign: 'right'}}>
                No
              </Text>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <View>
              <Text style={styles.detailsTitle}>Total</Text>
              <Text style={styles.detailsValue}>GPB 71.00</Text>
            </View>
            <View>
              <Text style={{...styles.detailsTitle, textAlign: 'right'}}>
                Account Number
              </Text>
              <Text style={{...styles.detailsValue, textAlign: 'right'}}>
                0131652470
              </Text>
            </View>
          </View>
          <View style={styles.detailsRow}>
            <View>
              <Text style={styles.detailsTitle}>Exchange rate</Text>
              <Text style={styles.detailsValue}>GPB 1=NGN 574.37</Text>
            </View>
            <View>
              <Text style={{...styles.detailsTitle, textAlign: 'right'}}>
                Bank
              </Text>
              <Text style={{...styles.detailsValue, textAlign: 'right'}}>
                GTB
              </Text>
            </View>
          </View>
        </View>
        {txnStatus == 'declined' ? (
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Icon name="closecircleo" color={'red'} size={100} />
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>Transaction</Text>
              <Text style={{fontSize: 20}}>Declined</Text>
            </View>
          </View>
        ) : (
          <View style={{alignItems: 'center', marginBottom: 20}}>
            <Icon name="checkcircleo" color={'green'} size={100} />
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 20}}>Transaction</Text>
              <Text style={{fontSize: 20}}>Completed</Text>
            </View>
          </View>
        )}
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Notifications')}>
            <Text style={styles.btnText}>Done</Text>
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
  btnLayout: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailsLayout: {
    backgroundColor: '#F4F8FB',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  detailsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 15,
  },
  detailsTitle: {
    fontSize: 16,
    color: 'grey',
  },
  detailsValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Done;
