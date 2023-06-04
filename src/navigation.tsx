import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SafeAreaView, StyleSheet, View, Text, Pressable} from 'react-native';
import Header from './components/header';
import Notifications from './screens/notifications';
import RequestDetails from './screens/requestDetails';
import DeclineRequest from './screens/declineRequest';
import Done from './screens/done';
import Pay from './screens/pay';

type RootStackParamList = {
  Done: {txnStatus: string};
  Notifications: undefined;
  Request_details: undefined;
  Decline_Request: undefined;
  Pay: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTransparent: false,
          headerBackTitleVisible: false,
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen
          name="Request_details"
          component={RequestDetails}
          options={{title: 'Request details'}}
        />
        <Stack.Screen
          name="Decline_Request"
          component={DeclineRequest}
          options={{title: 'Decline this request?'}}
        />
        <Stack.Screen name="Done" component={Done} />
        <Stack.Screen
          name="Pay"
          component={Pay}
          options={{title: 'Add Payment Method'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
