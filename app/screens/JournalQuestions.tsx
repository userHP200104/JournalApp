import React from 'react';
import { Dimensions } from 'react-native';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, NativeSyntheticEvent, NativeScrollEvent} from 'react-native';
import { useState, useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';

import EmojiButton from '@/components/journal/Emoji';

const { height } = Dimensions.get('window');

export default function JournalQuestions( { navigation } ) {

  const [title, onChangeTitle] = useState('');
  const [answer1, onChangeAnswer1] = useState('');
  const [answer2, onChangeAnswer2] = useState('');
  const [answer3, onChangeAnswer3] = useState('');
  const [answer4, onChangeAnswer4] = useState('');
  const [answer5, onChangeAnswer5] = useState('');
  const [answer6, onChangeAnswer6] = useState('');
  const [feeling, onChangeFeeling] = useState('');
  const [emoji, setEmoji] = useState('Select an Emoji')
  const [emojiFeeling, setEmojiFeeling] = useState('')


  const scrollViewRef = useRef<ScrollView>(null);
  const screenHeight = Dimensions.get('window').height;

  const goDown = () => {
    let scrollAmount = scrollHeight+screenHeight;
    if(scrollAmount <= screenHeight*7 && scrollAmount%screenHeight==0){
      scrollViewRef.current?.scrollTo({ x: 0, y: scrollAmount, animated: true });
    }
    console.log(
      " | title:: " + title, 
      " | answer1:: " + answer1, 
      " | answer2:: " + answer2, 
      " | answer3:: " + answer3, 
      " | answer4:: " + answer4, 
      " | answer5:: " + answer5, 
      " | answer6:: " + answer6,
      " | feeling:: " + feeling);
  };

  const goUp = () => {
    scrollViewRef.current?.scrollTo({ x: 0, y: scrollHeight-screenHeight, animated: true });
  };


  const [scrollHeight, setScrollHeight] = useState<number>(0);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollHeight = event.nativeEvent.contentOffset.y.toFixed();
    setScrollHeight(parseInt(currentScrollHeight));
  };

  interface Question {
    id: any
    changeId: any
    headerText: string;
    questionText: string;
  }

  const data: Question[] = [
    {id:title, changeId:onChangeTitle, headerText: 'Entry Title', questionText: 'In a short phrase describe your day.'},
    {id:answer1, changeId:onChangeAnswer1, headerText: 'Question 1', questionText: 'What was the highlight of your day?'},
    {id:answer2, changeId:onChangeAnswer2, headerText: 'Question 2', questionText: 'What was the biggest challenge you faced today?'},
    {id:answer3, changeId:onChangeAnswer3, headerText: 'Question 3', questionText: 'How did you overcome this challenge?'},
    {id:answer4, changeId:onChangeAnswer4, headerText: 'Question 4', questionText: 'What are you grateful for today?'},
    {id:answer5, changeId:onChangeAnswer5, headerText: 'Question 5', questionText: 'What did you learn today?'},
    {id:answer6, changeId:onChangeAnswer6, headerText: 'Question 6', questionText: 'What is one thing you could have done better?'},
    {id:feeling, changeId:onChangeFeeling, headerText: 'Last Question', questionText: 'What are you feeling?'},
  ]

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
  
  const saveEntry = async (navigation: NavigationProp<any>, title: string, answer1: string, answer2: string, answer3: string, answer4: string, answer5: string, answer6: string, feeling: string, emojiFeeling: string): Promise<void> => {
    const entry: Entry = {
      id: new Date().toISOString(),
      title,
      answer1,
      answer2,
      answer3,
      answer4,
      answer5,
      answer6,
      feeling,
      emojiFeeling,
    };
  
    try {
      await AsyncStorage.setItem(entry.id, JSON.stringify(entry));
      navigation.navigate('Review', { entryId: entry.id });
    } catch (error) {
      console.error('Failed to save the entry:', error);
    }
  };

  return (
    <>
    <ScrollView ref={scrollViewRef} onScroll={handleScroll} scrollEnabled={false}>
    {data.map((question) => (

        <View style={styles.entryView}>
            {/* Header */}
            <View style={styles.header}>
                    <Text style={styles.headerText}>{question.headerText}</Text>
            </View>
            {/* Question */}
            <View style={styles.questionContainer}>
                <Text style={styles.question}>{question.questionText}</Text>
            {/* Answer */}
            </View>
            {question.headerText != 'Last Question' ?
            <View style={styles.answerInputContainer}>
            <TextInput
                multiline={true}
                numberOfLines={14}
                style={styles.answerInput}
                onChangeText={question.changeId}
                placeholder='Type your answer here...'
                value={question.id}
                />
            </View>
            :
            <>
    <View style={styles.emojiButtonContainer}>

        <Text style={styles.emojiText}>{emoji}</Text>

        <View style={styles.emojiButtonRow}>
            <TouchableOpacity onPress={() =>{setEmoji('😁'); setEmojiFeeling('Happiness'); onChangeFeeling('Happiness 😁')}}>
                <EmojiButton emoji={'😁'} feeling={'Happiness'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{setEmoji('😢'); setEmojiFeeling('Sadness'); onChangeFeeling('Sadness 😢')}}>
                <EmojiButton emoji={'😢'} feeling={'Sadness'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{setEmoji('😡'); setEmojiFeeling('Anger'); onChangeFeeling('Anger 😡')}}>
                <EmojiButton emoji={'😡'} feeling={'Anger'}/>
            </TouchableOpacity>
        
        </View>

        <View style={styles.emojiButtonRow}>
            <TouchableOpacity onPress={() =>{setEmoji('😨'); setEmojiFeeling('Fear'); onChangeFeeling('Fear 😨')}}>
                <EmojiButton emoji={'😨'} feeling={'Fear'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{setEmoji('😮'); setEmojiFeeling('Suprise'); onChangeFeeling('Suprise 😮')}}>
                <EmojiButton emoji={'😮'} feeling={'Suprise'}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() =>{setEmoji('❤️'); setEmojiFeeling('Love'); onChangeFeeling('Love ❤️')}}>
                <EmojiButton emoji={'❤️'} feeling={'Love'}/>
            </TouchableOpacity>
            
        </View>
    </View>
    {/* <ReviewEntryButton navigation={navigation} prevScreen={prevScreen} nextScreen={nextScreen} nextButton={nextButton} entryKey='feeling' answer={feeling+" "+emoji}/> */}
    </>
            
          }
          
          </View>
        ))}
      </ScrollView>


    {/* Button */}
    <View style={styles.buttonContainer}>
      {/* Back Button */}
      <TouchableOpacity
          style={styles.backButton}
          onPress={() => {scrollHeight === 0 ? navigation.navigate('Home') : goUp(); // Scroll up
}}
        >
          <Text style={styles.backButtonText}>&lt;&nbsp;Back</Text>
        </TouchableOpacity>
      {/* <TouchableOpacity style={styles.backButton} onPress={goUp}>
        <Text style={styles.backButtonText}>&lt;&nbsp;Back</Text>
      </TouchableOpacity> */}
      {/* Back Button End */}

      {/* Next Button */}
      {/* <TouchableOpacity style={styles.nextButton} onPress={goDown}> */}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={scrollHeight < screenHeight * 7 ? goDown : () => saveEntry(navigation, title, answer1, answer2, answer3, answer4, answer5, answer6, feeling, emojiFeeling)}
      >
        {scrollHeight < screenHeight * 7 ? (
          <Text style={styles.nextButtonText}>Next&nbsp;&gt;</Text>
        ) : (
          <Text style={styles.nextButtonText}>Review</Text>
        )}
      </TouchableOpacity>
      {/* Next Button End */}
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  // Entry View

  entryView: {
    height: height,
    
  },

  // Header

  header: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 64,
    padding: 32,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#000000',
    borderBottomColor: '#000000',
    width: '100%',
  },

  headerText: {
    fontSize: 24,
    fontWeight: "bold"
  },

  // Question

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

  // Answer

  answerInputContainer: {
    flex: 1,
    width: '100%',
    padding: 32,
  },

  answerInput: {

  },

  // Feelings/Emoji's

  emojiText: {
    marginTop: -32,
    marginBottom: 32,
    fontSize: 24,
    fontWeight: "bold"

},

feelingsText: {
    paddingTop: 12,
    fontSize: 12,
    fontWeight: "bold"

},

emojiButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: 100,
    height: 100,
    backgroundColor: '#fff',
    margin: 8,
    borderRadius: 8,

},

emojiButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 32,
    marginBottom: '32%'
},

emojiButtonRow: {
    flexDirection: 'row',
    // flex: 1,
    // width: '100%',
    // padding: 32,
  },

  // Buttons

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