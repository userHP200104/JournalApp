import React,{useState, useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { TransitionPresets } from '@react-navigation/stack';

import Home from './screens/Home';
import JournalQuestions from './screens/JournalQuestions';
import Review from './screens/Review';
import ViewEntry from './screens/ViewEntry';

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
        ...TransitionPresets.ModalPresentationIOS
        }}>
      
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="JournalQuestions" component={JournalQuestions} />
      <Stack.Screen name="Review" component={Review} />
      <Stack.Screen name="ViewEntry" component={ViewEntry} />

    </Stack.Navigator>
  );
}