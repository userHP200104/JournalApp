import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

export default function Answer() {
    
    // Text Input Handler
    const [answer, onChangeAnswer] = React.useState('');
  

  return (
        // Answer Input
        <View style={styles.answerInputContainer}>
                <TextInput
                    multiline = {true}
                    numberOfLines = {14}
                    style={styles.answerInput}
                    onChangeText={onChangeAnswer}
                    placeholder='Type your answer here...'
                    value={answer}
                    />
        </View>
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
