import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import UserCard from '../components/usercard';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

function RequestDetails({navigation}: RouterProps): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <ScrollView>
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
          <View style={styles.btnLayout}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Pay')}>
              <Text style={styles.btnText}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.navigate('Decline_Request')}>
              <Text style={styles.btnText}>Decline</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.actionLayout}>
            <View style={styles.actionView}>
              <Icon name="user-circle-o" size={24} />
              <Text style={styles.actionText}>Report Shola</Text>
            </View>
            <View style={styles.actionView}>
              <MaterialCommunityIcon name="cancel" size={24} />
              <Text style={styles.actionText}>Block Shola</Text>
            </View>
            <View style={styles.actionView}>
              <MaterialCommunityIcon name="clock-time-nine" size={24} />
              <Text style={styles.actionText}>Show History</Text>
            </View>
          </View>
        </View>
      </ScrollView>
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
    borderRadius: 10,
    flexBasis: '46%',
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
  actionView: {
    marginVertical: 4,
    flexDirection: 'row',
    gap: 8,
  },
  actionText: {
    fontSize: 16,
  },
  actionLayout: {
    marginTop: 20,
  },
});

export default RequestDetails;
