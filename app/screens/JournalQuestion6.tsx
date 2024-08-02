import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

import Header from '@/components/journal/Header';
import Question from '@/components/journal/Question';
import Answer from '@/components/journal/Answer';
import Buttons from '@/components/journal/Buttons';

export default function JournalQuestion6( { navigation } ) {
    
  return (
    <>
    <Header headerNumber='Question 6'/>
    <Question question='What is one thing you could have done&nbsp;better?'/>
    <Answer/>
    <Buttons navigation={navigation} prevScreen="JournalQuestion5" nextScreen="JournalQuestion7" nextButton="Next&nbsp;&gt;"/>
    </>
  );
}

const styles = StyleSheet.create({

  journalQuestionView: {
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  header: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 64,
    padding: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#000000',
    width: '100%',
  },

  headerText: {
    fontSize: 24,
    fontWeight: 600
  },

  questionContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 48,
    paddingHorizontal: 24,
  }, 

  question:{
    fontSize: 24,
    color: '#FFFFFF',
  },

  answerInputContainer: {
    flex: 1,
    width: '100%',
    padding: 32,
  },

  answerInput: {

  },

  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 32,
    paddingBottom: 48,
    borderTopWidth: 1,
    borderTopColor: '#000000',
  },

  backButton: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center'
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
    fontWeight: 600,
   },

  nextButtonText: {
    fontSize: 24,
    fontWeight: 600,
    color: '#FFFFFF',
   },

});