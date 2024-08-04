import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import { setData } from '@/app/AsycStorageServie'

import AsyncStorage from '@react-native-async-storage/async-storage';


import { TestEntries} from '../../app/TestEntries';


interface ButtonsProps {
  navigation: any;
  prevScreen: string;
  nextScreen: string;
  nextButton: string;
  entryKey: string;
  answer: string;
}

const Buttons: React.FC<ButtonsProps> = ({ navigation, prevScreen, nextScreen, nextButton, entryKey, answer }) => {


  return (
    // Buttons
    <View style={styles.buttonContainer}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => {
        navigation.navigate(prevScreen);
        console.log("Back")}}>
        <Text style={styles.backButtonText}>&lt;&nbsp;Back</Text>
      </TouchableOpacity>
      {/* Back Button End */}

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => {
        // console.log('Input values:', inputValues);
        navigation.navigate(nextScreen);
        // setData(entryKey, answer);
        // console.log(entryKey +' '+ answer)
        }}>
        <Text style={styles.nextButtonText}>{nextButton}</Text>
      </TouchableOpacity>
      {/* Next Button End */}
    </View>
    // Buttons End
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 32,
    paddingBottom: 48,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    backgroundColor: '#FFF',
  },
  backButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center',
  },
  nextButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center',
    backgroundColor: '#000000',
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: '600',
  },
  nextButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});

export default Buttons;
