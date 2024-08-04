import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

let STORAGE_KEY = new Date().toDateString();
// Storing object value
export const saveData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Data successfully saved');
    
  } catch (e) {
    alert(e)
    
  }
};

// Reading object value
export const loadData = async () => {
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY);
      return value != null ? JSON.parse(value.toString()) : null;
      console.log('Stored data:', parsedValue);
  
    } catch (e) {
      alert(e);
    }
  };
