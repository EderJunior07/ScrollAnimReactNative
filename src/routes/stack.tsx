import React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import BandDetails from '../pages/BandDetails';
import Main from '../pages/Main';

enableScreens();
const {Navigator, Screen} = createNativeStackNavigator();

const Routes = () => {
  return (
    <Navigator
      screenOptions={{stackAnimation: 'slide_from_right', headerShown: false}}>
      <Screen name="Main" component={BandDetails} />
    </Navigator>
  );
};

export default Routes;
