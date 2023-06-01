import React from 'react';
import {NavigationProp} from '@react-navigation/native';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
interface RouterProps {
  navigation: NavigationProp<any, any>;
  title: string;
  color?: string;
}
function Header({navigation, title, color}: RouterProps): JSX.Element {
  return (
    <SafeAreaView style={{backgroundColor: color ?? 'white'}}>
      <View style={styles.sectionContainer}>
        <View>
          <Text
            onPress={() => {
              navigation.goBack();
            }}>
            Back
          </Text>
        </View>
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
        </View>
        <View style={{}}>
          <Text style={{color: 'transparent'}}>Back</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 4,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
});

export default Header;
