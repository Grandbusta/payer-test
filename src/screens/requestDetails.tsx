import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';
import TransactionPill from '../components/transactionPill';

function RequestDetails(): JSX.Element {
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <View style={{marginHorizontal: 40, marginVertical: 20}}>
        <View
          style={{backgroundColor: '#FBFBFB', padding: 20, borderRadius: 8}}>
          <View></View>
          <View>
            <Text style={{fontSize: 16, marginBottom: 6}}>Shola Ajayi</Text>
            <Text style={{color: 'grey', fontSize: 12, marginBottom: 6}}>
              +43212323456
            </Text>
            <Text style={{color: 'grey', fontSize: 12, marginBottom: 6}}>
              peterfajemisin@gmail.com
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#F4F8FB',
            padding: 20,
            marginVertical: 20,
          }}></View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Pressable
            style={{
              backgroundColor: '#091849',
              paddingHorizontal: 20,
              paddingVertical: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              flexBasis: '46%',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Pay
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: '#091849',
              paddingHorizontal: 20,
              paddingVertical: 15,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              flexBasis: '46%',
            }}>
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>
              Decline
            </Text>
          </Pressable>
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
});

export default RequestDetails;
