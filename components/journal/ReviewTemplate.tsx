import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

interface ReviewTemplateProps {
  title: string;
  feeling: string;
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
  question6: string;
}
const ReviewTemplate:React.FC<ReviewTemplateProps> = ({title, feeling, question1, question2, question3, question4, question5, question6}) => {


  return (
    // Question Container  
    <ScrollView style={styles.reviewContainer}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.feelingContainer}>
            <Text style={styles.feeling}>{feeling}</Text>
        </View>

        <Text style={styles.questionTitle}>What was the highlight of your&nbsp;day?</Text>
        <Text style={styles.question}>{question1}</Text>

        <Text style={styles.questionTitle}>What was the biggest challenge you faced&nbsp;today?</Text>
        <Text style={styles.question}>{question2}</Text>

        <Text style={styles.questionTitle}>How did you overcome this&nbsp;challenge?</Text>
        <Text style={styles.question}>{question3}</Text>

        <Text style={styles.questionTitle}>What are you grateful for&nbsp;today?</Text>
        <Text style={styles.question}>{question4}</Text>

        <Text style={styles.questionTitle}>What did you learn&nbsp;today?</Text>
        <Text style={styles.question}>{question5}</Text>

        <Text style={styles.questionTitle}>What is one thing you could have done&nbsp;better?</Text>
        <Text style={styles.question}>{question6}</Text>
        
        <Text style={styles.spacer}></Text>
    </ScrollView>
    // Question Container End  

  );
}

const styles = StyleSheet.create({

  reviewContainer:{
    flex: 1,
    flexDirection: 'column',
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    width: '100%',
    // backgroundColor: '#000000',
    paddingTop: 48,
    marginBottom: 132,
    paddingHorizontal: 20,
    overflow: 'scroll'
  }, 

  title:{
    fontSize: 64,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 24,
},

feelingContainer:{
    width: 'auto',
    marginHorizontal: 16,
    flexDirection: 'row',
    paddingBottom: 24,
},

feeling:{
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 8,
    color: '#FFFFFF',
},

questionTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    paddingBottom: 16,
    
},

question:{
    fontSize: 12,
    fontWeight: 400,
    paddingHorizontal: 16,
    paddingBottom: 24,
    
  },

  spacer:{
    paddingHorizontal: 16,
    paddingBottom: 80,
    
},

});

export default ReviewTemplate;