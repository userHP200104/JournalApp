import React,{useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Home from './screens/Home';
import JournalQuestion from './screens/JournalQuestion';
// import JQTwo from './screens/JQTwo'
// import JQThree from './screens/JQThree'
// import JQFour from './screens/JQFour'
// import JQFive from './screens/JQFive'
// import JQSix from './screens/JQSix'
// import JQSeven from './screens/JQSeven'
// import JQEight from './screens/JQEight'

const Stack = createStackNavigator();

   // Navigation
  //  const navigation = useNavigation();
    
  //  useEffect(() => {
  //      navigation.setOptions({ headerShown: false });
  //  }, [navigation]);


export default function MyStack() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JournalQuestion" component={JournalQuestion} />
      {/* <Stack.Screen name="JQTwo" component={JQTwo} />
      <Stack.Screen name="JQThree" component={JQThree} />
      <Stack.Screen name="JQFour" component={JQFour} />
      <Stack.Screen name="JQFive" component={JQFive} />
      <Stack.Screen name="JQSix" component={JQSix} />
      <Stack.Screen name="JQSeven" component={JQSeven} />
      <Stack.Screen name="JQEight" component={JQEight} /> */}
    </Stack.Navigator>
  );
}