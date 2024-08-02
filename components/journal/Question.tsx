import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

interface QuestionProps {
  question: string;
}
const Question:React.FC<QuestionProps> = ({question}) => {


  return (
    // Question Container  
    <View style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
    </View>
    // Question Container End  

  );
}

const styles = StyleSheet.create({

  questionContainer:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#000000',
    paddingVertical: 48,
    paddingHorizontal: 20,
  }, 

  question:{
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

});

export default Question;