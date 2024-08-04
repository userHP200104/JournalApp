import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

// Storing object value
export const setData = async (key, value) => {
  
  console.log("setData Key: ", key)

  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Data successfully saved');
  } catch (e) {
    alert(e)
    
  }
};

export const getEntry = async (key) => {

  console.log("getEntry Key: ", key)

  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    alert(e);
  }
};

// export const saveData = async (key, value) => {
//   try {
//     const jsonValue = JSON.stringify(value);
//     await AsyncStorage.setItem(key, jsonValue);
//     console.log('Data successfully saved');
    
//   } catch (e) {
//     alert(e)
    
//   }
// };

// Reading object value
// export const loadData = async () => {
//     try {
//       const value = await AsyncStorage.getItem(STORAGE_KEY);
//       return value != null ? JSON.parse(value.toString()) : null;
//       console.log('Stored data:', parsedValue);
  
//     } catch (e) {
//       alert(e);
//     }
//   };
