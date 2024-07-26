import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import Signup from './Screens/Signup';
import Signin from './Screens/Signin';
import {DrawerRouter, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomePage from './Screens/HomePage';
import Account from './Screens/Account';
import Wallet from './Screens/Account';
import BankDetail from './Screens/BankDetail'
import AddMoney from './Screens/AddMoney';
import HomeTabs from './Screens/HomeTabs';
import Walletsign from './Screens/Wallet_Signin';
import { AppProvider } from './Global/APIContext';


import * as SplashScreen from "expo-splash-screen";
const Stack = createNativeStackNavigator();


export default function App() {
  useEffect(() => {
    const prepare = async () => {
      // Perform any necessary tasks while the splash screen is shown
      // This can include fetching data, initializing the app, etc.
      await new Promise(resolve => setTimeout(resolve, 2000)); // Example delay

      // Hide the splash screen
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  return (

    // <AppProvider>

    // <NavigationContainer>

    //   <Stack.Navigator initialRouteName='SignInScreen'>


    //    <Stack.Screen name='SignInScreen' component={Signin} options={{headerShown:false}}/>
    //   <Stack.Screen name='SignUpScreen' component={Signup} options={{headerShown:false}}/>
    //      <Stack.Screen name='HomePage' component={HomeTabs} options={{headerShown:false}}/>
    //     <Stack.Screen name='BankDetail' component={BankDetail} options={{headerShown:false}}/>
    //      <Stack.Screen name='AddMoney' component={AddMoney} options={{headerShown:false}}/>
    //      <Stack.Screen name='WalletSignin' component={Walletsign} options={{headerShown:false}}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
    // </AppProvider>

      <AppProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='SignInScreen'>
            <Stack.Screen name='SignInScreen' component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name='SignUpScreen' component={Signup} options={{ headerShown: false }} />
            <Stack.Screen name='HomePage' component={HomeTabs} options={{ headerShown: false }} />
            <Stack.Screen name='BankDetail' component={BankDetail} options={{ headerShown: false }} />
            <Stack.Screen name='AddMoney' component={AddMoney} options={{ headerShown: false }} />
            <Stack.Screen name='WalletSignin' component={Walletsign} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppProvider>
    );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
  },
});