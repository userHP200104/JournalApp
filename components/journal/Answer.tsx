import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect, useState } from 'react';

import Buttons from '@/components/journal/Buttons';


interface ButtonsProps {
  navigation: any;
  prevScreen: string;
  nextScreen: string;
  nextButton: string;
}

  const Answer: React.FC<ButtonsProps> = ({ navigation, prevScreen, nextScreen, nextButton}) => {
    
    // Text Input Handler
    const [journalAnswer, onChangeAnswer] = useState('');
  

  return (
        // Answer Input
        <>
        <View style={styles.answerInputContainer}>
                <TextInput
                    multiline = {true}
                    numberOfLines = {14}
                    style={styles.answerInput}
                    onChangeText={onChangeAnswer}
                    placeholder='Type your answer here...'
                    value={journalAnswer}
                    />
        </View>
        <Buttons navigation={navigation} prevScreen={prevScreen} nextScreen={nextScreen} nextButton={nextButton} answer={journalAnswer}/>
        </>
        // Answer Input End
  );
}

const styles = StyleSheet.create({

  answerInputContainer: {
    flex: 1,
    width: '100%',
    padding: 32,
  },

  answerInput: {

  },

});

export default Answer;
