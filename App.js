// In App.js in a new project

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {BottomTabBarMenu} from './component/bottomTabBar';
import {Feed} from './screens/feed';
import {Messages} from './screens/messages';
import {News} from './screens/news';
import {Profile} from './screens/profile';
import {Settings} from './screens/settings';
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Tab.Navigator
      tabBar={props => <BottomTabBarMenu {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Messages" component={Messages} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
