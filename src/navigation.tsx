import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Notifications from './screens/notifications';
import RequestDetails from './screens/requestDetails';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Request details" component={RequestDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;
