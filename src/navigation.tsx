import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';
import Header from './components/header';
import Notifications from './screens/notifications';
import RequestDetails from './screens/requestDetails';
import DeclineRequest from './screens/declineRequest';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          headerBackTitleVisible: false,
        }}>
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Request details" component={RequestDetails} />
        <Stack.Screen
          name="Decline Request"
          component={DeclineRequest}
          options={{title: 'Decline this request?'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
