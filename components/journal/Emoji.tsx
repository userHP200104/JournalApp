import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput, Button} from 'react-native';
import { useState, useEffect } from 'react';

import ReviewEntryButton from '@/components/journal/ReviewEntryButton';

interface EmojiButtonProps {
    emoji: string;
    feeling: string;
}

// interface ButtonsProps {
//     navigation: any;
//     prevScreen: string;
//     nextScreen: string;
//     nextButton: string;
// }


const EmojiButton:React.FC<EmojiButtonProps> = ({emoji, feeling}) => {
    
    return (
            <View style={styles.emojiButton}>
            <Text>{emoji}</Text>     
            <Text style={styles.feelingsText}>{feeling}</Text>     
        </View>
        
      
  
    );
  }

// const Emoji: React.FC<ButtonsProps> = (
// const Emoji = (
//     // { navigation, prevScreen, nextScreen, nextButton}
// ) => {

//     const [emoji, setEmoji] = useState('What are you feeling today?')
//     const [feeling, setFeeling] = useState('')

//   return (
//     <>
//     <View style={styles.emojiButtonContainer}>

//         <Text style={styles.emojiText}>{emoji}</Text>

//         <View style={styles.emojiButtonRow}>
//             <TouchableOpacity onPress={() =>{setEmoji('😁'); setFeeling('Happiness')}}>
//                 <EmojiButton emoji={'😁'} feeling={'Happiness'}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() =>{setEmoji('😢'); setFeeling('Sadness')}}>
//                 <EmojiButton emoji={'😢'} feeling={'Sadness'}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() =>{setEmoji('😡'); setFeeling('Anger')}}>
//                 <EmojiButton emoji={'😡'} feeling={'Anger'}/>
//             </TouchableOpacity>
        
//         </View>

//         <View style={styles.emojiButtonRow}>
//             <TouchableOpacity onPress={() =>{setEmoji('😨'); setFeeling('Fear')}}>
//                 <EmojiButton emoji={'😨'} feeling={'Fear'}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() =>{setEmoji('😮'); setFeeling('Suprise')}}>
//                 <EmojiButton emoji={'😮'} feeling={'Suprise'}/>
//             </TouchableOpacity>

//             <TouchableOpacity onPress={() =>{setEmoji('❤️'); setFeeling('Love')}}>
//                 <EmojiButton emoji={'❤️'} feeling={'Love'}/>
//             </TouchableOpacity>
            
//         </View>
//     </View>
//     {/* <ReviewEntryButton navigation={navigation} prevScreen={prevScreen} nextScreen={nextScreen} nextButton={nextButton} entryKey='feeling' answer={feeling+" "+emoji}/> */}
//     </>

//   );
// }

const styles = StyleSheet.create({
  
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
        backgroundColor: '#fefefe',
        margin: 8,
        borderRadius: 8,
        // borderColor: '#1a1a1a',
        // borderWidth: 1,
        shadowOffset: {width: 0, height: -0},
        shadowOpacity: 0.08,
        shadowRadius: 24,
  
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
  
});

export default EmojiButton;