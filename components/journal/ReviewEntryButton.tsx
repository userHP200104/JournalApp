import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState, useEffect } from "react";
import { setData } from '@/app/AsycStorageServie'

import { TestEntries} from '../../app/TestEntries';


interface ReviewEntryButtonProps {
  navigation: any;
  prevScreen: string;
  nextScreen: string;
  nextButton: string;
  entryKey: string;
  answer: string;
}

const ReviewEntryButton: React.FC<ReviewEntryButtonProps> = ({ navigation, prevScreen, nextScreen, nextButton, entryKey, answer }) => {
  
  const date = new Date().toDateString();

  const [entrys, setEntrys] = useState<{ id: number; title: string; answer1: string; answer2: string; answer3: string; answer4: string; answer5: string; answer6: string; feeling: string; time: number; }[]>([]);

  
    const newEntryHandler = async ( title: string, answer1: string, answer2: string, answer3: string, answer4: string, answer5: string, answer6: string, feeling: string ) => {
        const entry = { id: Date.now(), title, answer1, answer2, answer3, answer4, answer5, answer6, feeling, time: Date.now()};

        try {
            const storedNotes = await AsyncStorage.getItem('notes');
            const existingEntrys = storedNotes ? JSON.parse(storedNotes) : [];
            const updatedEntrys = [...existingEntrys, entry];

            setEntrys(updatedEntrys);

        await AsyncStorage.setItem('notes', JSON.stringify(updatedEntrys));
        
        }  catch (error) {
            console.error('Error saving entry:', error);

        }
    };

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
        navigation.navigate(nextScreen);
        setData(entryKey, answer);
        console.log(entryKey +' '+ answer)}}>
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

export default ReviewEntryButton;
