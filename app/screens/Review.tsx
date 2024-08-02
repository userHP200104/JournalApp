import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

import ReviewTemplate from '@/components/journal/ReviewTemplate';
import ReviewButtons from '@/components/journal/ReviewButtons';

export default function JournalQuestion8( { navigation } ) {
    
  return (
    <>
    <ReviewTemplate title={'title'} feeling={'feeling'} question1={'question1'} question2={'question2'} question3={'question3'} question4={'question4'} question5={'question5'} question6={'question6'}/>
    <ReviewButtons navigation={navigation} prevScreen="JournalQuestion8" nextScreen="Home" nextButton="Done"/>
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