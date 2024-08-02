import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useState, useEffect } from 'react';


interface EmojiButtonProps {
    emoji: string;
    feeling: string;
}
const EmojiButton:React.FC<EmojiButtonProps> = ({emoji, feeling}) => {
    
    const [shadowRadius, setShadowRadius] = useState(24);
    const [shadowOpacity, setShadowOpacity] = useState(0.08);

    return (
        <TouchableOpacity>
            <View style={
                [styles.emojiButton, 
                    {
                        shadowOffset: {
                            width: 0,
                            height: -0,
                        },
                        shadowOpacity,
                        shadowRadius,
                    }
                ]}>
            <Text>{emoji}</Text>     
            <Text>{feeling}</Text>     
        </View>
        </TouchableOpacity>
      
  
    );
  }

const Emoji = () => {

  return (
    <View style={styles.emojiButtonContainer}>
        <View style={styles.emojiButtonRow}>
            <EmojiButton emoji={'😁'} feeling={'Happiness'}/>
            <EmojiButton emoji={'😢'} feeling={'Sadness'}/>
            <EmojiButton emoji={'😡'} feeling={'Anger'}/>
        
        </View>

        <View style={styles.emojiButtonRow}>
            <EmojiButton emoji={'😨'} feeling={'Fear'}/>
            <EmojiButton emoji={'😮'} feeling={'Suprise'}/>
            <EmojiButton emoji={'❤️'} feeling={'Love'}/>
            
        </View>
    </View>

  );
}

const styles = StyleSheet.create({
  
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
    },
    
    emojiButtonRow: {
        flexDirection: 'row',
        // flex: 1,
        // width: '100%',
        // padding: 32,
      },
  
});

export default Emoji;