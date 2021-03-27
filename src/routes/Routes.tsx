import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';




const Routes: FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
    <Stack.Screen
          name="Login"
          component={Login}
         
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;



