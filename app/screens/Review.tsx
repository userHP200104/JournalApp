import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

import { loadData } from '@/app/AsycStorageServie'


import ReviewTemplate from '@/components/journal/ReviewTemplate';
import ReviewButtons from '@/components/journal/ReviewButtons';

import { TestEntries } from '../TestEntries';

export default function JournalQuestion8( { navigation } ) {

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  // day.toString()+'.'+month.toString()+'.'+year.toString()
  
  useEffect(() => {
    (async()=>{
         await loadData()
         console.log('useEffect',await loadData())
    })();
}, [])

    
  return (
    <>
      {TestEntries.map((entry) => (
        <React.Fragment key={entry.id}>
          <ReviewTemplate
            title={entry.title}
            feeling={entry.feeling}
            question1={entry.answer1}
            question2={entry.answer2}
            question3={entry.answer3}
            question4={entry.answer4}
            question5={entry.answer5}
            question6={loadData().toString()}
          />
          <ReviewButtons
            navigation={navigation}
            prevScreen="JournalQuestion8"
            nextScreen="Home"
            nextButton="Done"
          />
        </React.Fragment>
      ))}
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