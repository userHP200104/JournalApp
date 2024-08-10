import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome6 } from '@expo/vector-icons';


import ReviewTemplate from '@/components/journal/ReviewTemplate';

type RootStackParamList = {
  Review: { entryId: string };
};

type ReviewScreenRouteProp = RouteProp<RootStackParamList, 'Review'>;
type ReviewScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Review'>;

interface ReviewProps {
  route: ReviewScreenRouteProp;
  navigation: ReviewScreenNavigationProp;
}

interface Entry {
  id: string;
  title: string;
  answer1: string;
  answer2: string;
  answer3: string;
  answer4: string;
  answer5: string;
  answer6: string;
  feeling: string;
  emojiFeeling: string;
}

export default function ViewEntry({ route, navigation }: ReviewProps) {
  const [entry, setEntry] = useState<Entry | null>(null);
  const { entryId } = route.params;

  useEffect(() => {
    const fetchEntry = async () => {
      try {
        const storedEntry = await AsyncStorage.getItem(entryId);
        if (storedEntry) {
          setEntry(JSON.parse(storedEntry));
        }
      } catch (error) {
        console.error('Failed to fetch the entry:', error);
      }
    };

    fetchEntry();
  }, [entryId]);

  if (!entry) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (


    <>
      

          <ReviewTemplate
            title={entry.title}
            feeling={entry.feeling}
            question1={entry.answer1}
            question2={entry.answer2}
            question3={entry.answer3}
            question4={entry.answer4}
            question5={entry.answer5}
            question6={entry.answer6}
          />
          <View style={styles.buttonContainer}>
        {/* Back Button */}
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
            <FontAwesome6 name="chevron-left" size={16} color="#1a1a1a"/>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        {/* Back Button End */}
      </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  
    
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 32,
    paddingBottom: 48,
    paddingHorizontal: 32,
    backgroundColor: '#fefefe',

    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.04,
    shadowRadius: 24,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 28,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#1a1a1a',
    textAlign: 'center',
    gap: 12,
    borderRadius: 32,
  },

  backButtonText: {
    fontSize: 24,
    fontWeight: '600',
    },
    
});