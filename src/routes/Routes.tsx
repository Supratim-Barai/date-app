import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Swiper from '../components/Swiper';



const Routes: FC = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
         
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;

const HomeScreen = ({navigation}: {navigation: any}) => {
  return (
      <Swiper/>
  );
};

