import React,{useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

import Home from './screens/Home';
import JournalQuestions from './screens/JournalQuestions';
import Review from './screens/Review';
import ViewEntry from './screens/ViewEntry';
import JournalQuestion1 from './screens/JournalQuestion1';
import JournalQuestion2 from './screens/JournalQuestion2';
import JournalQuestion3 from './screens/JournalQuestion3';
import JournalQuestion4 from './screens/JournalQuestion4';
import JournalQuestion5 from './screens/JournalQuestion5';
import JournalQuestion6 from './screens/JournalQuestion6';
import JournalQuestion7 from './screens/JournalQuestion7';
import JournalQuestion8 from './screens/JournalQuestion8';


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
        headerShown: false,
        }}>
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JournalQuestions" component={JournalQuestions} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="ViewEntry" component={ViewEntry} />
      {/* <Stack.Screen name="JournalQuestion1" component={JournalQuestion1} />
      <Stack.Screen name="JournalQuestion2" component={JournalQuestion2} />
      <Stack.Screen name="JournalQuestion3" component={JournalQuestion3} />
      <Stack.Screen name="JournalQuestion4" component={JournalQuestion4} />
      <Stack.Screen name="JournalQuestion5" component={JournalQuestion5} />
      <Stack.Screen name="JournalQuestion6" component={JournalQuestion6} />
      <Stack.Screen name="JournalQuestion7" component={JournalQuestion7} />
      <Stack.Screen name="JournalQuestion8" component={JournalQuestion8} /> */}

    </Stack.Navigator>
  );
}