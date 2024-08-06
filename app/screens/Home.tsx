import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import { useCallback, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { TouchableOpacity } from 'react-native-gesture-handler'
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp, useFocusEffect } from '@react-navigation/native';

type RootStackParamList = {
  Home: undefined;
  Review: { entryId: string };
  ViewEntry: { entryId: string };
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;

interface HomeProps {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
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

export default function Home({ navigation }: HomeProps) {
  const [entries, setEntries] = useState<Entry[]>([]);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setEntries([]); // Clear the state after clearing the storage
      alert('Storage successfully cleared!');
    } catch (e) {
      alert('Failed to clear the async storage. ' + e);
    }
  };

  
  const fetchEntries = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const entries = await AsyncStorage.multiGet(keys);
      const parsedEntries: Entry[] = entries.map(entry => JSON.parse(entry[1] || '{}')).filter(entry => entry.title);
      // Sort entries by id (date)
      const sortedEntries = parsedEntries.sort((a, b) => new Date(b.id).getTime() - new Date(a.id).getTime());
      setEntries(sortedEntries);
    } catch (error) {
      console.error('Failed to fetch entries:', error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchEntries();
    }, [])
  );

  const formatDate = (isoString: string): string => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    
    return `${day}.${month}.${year}`;
  };

  const extractEmoji = (text: string): string => {
    const regex = /(\p{Emoji_Presentation}|\p{Emoji}\uFE0F|\p{Emoji_Modifier_Base})/gu;
    const match = text.match(regex);
    return match ? match[0] : '';
  };

  const renderItem = ({ item }: { item: Entry }) => (
    <TouchableOpacity
      style={styles.entryItem}
      onPress={() => navigation.navigate('ViewEntry', { entryId: item.id })}
    >
      <View style={styles.entryTitleContainer}>
        <View>
          <Text style={styles.entryTitle}>{item.title}</Text>
          <Text style={styles.entryDate}>{formatDate(item.id)}</Text>
          
        </View>

        <View>
          <Text style={styles.entryEmoji}>{extractEmoji(item.feeling)}</Text>
        
        </View>  
      </View>
    </TouchableOpacity>
  );

  return (


    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

      {/* Header */}        
      <View style={styles.header}>
        <Text style={styles.headerText}>Journal Entries</Text>
      </View>
      {/* Header End*/}

      {/* Journal Entry Display */}
      <View style={styles.entryStorage}>
        <View style={styles.container}>
          {/* <Text style={styles.title}>Your Entries</Text> */}
          <FlatList
          style = {styles.flatList}
            data={entries}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            ListEmptyComponent={<Text style={styles.emptyTextOne}>It feels a bit{"\n"}empty in here 😅.</Text>}

          />
        </View>

      </View>

      <TouchableOpacity style={styles.button} onPress={clearStorage}>
        <Text style={styles.buttonText}>Clear Storage</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.addButtonContainer} onPress={() => navigation.navigate('JournalQuestions')}>
        <View style={styles.addButtonView}>
          <Text style={styles.addButtonText}>+ Add Entry</Text>
        </View>
      </TouchableOpacity>      
      {/* Add Journal Entry Button End*/}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    // backgroundColor: 'orange'
  },

  button: {
    padding: 10,
    // backgroundColor: 'red',
    marginBottom: 20,
  },

  buttonText: {
    color: 'red',
    fontSize: 16,
    fontWeight: 'bold',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  entryItem: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },

  flatList: {
    width: '100%',
  },

  entryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 8,
  },

  entryDate: {
    fontSize: 16,
  },
  
  entryEmoji: {
    fontSize: 24,
  },

  entryTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  ////////////

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
    fontWeight: 'bold'
  },

  entryStorage: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'lime'
  },

  emptyTextOne: {
    textAlign: 'left',
    margin: 'auto',
    paddingVertical: '72%',
    fontSize: 24,
    fontWeight: 'bold',

    // paddingTop: '100%',
  },

  emptyTextTwo: {
    textAlign: 'center',
    marginTop: '100%',
  },

  arrow: {
    width: 12,
    height: 82,
    alignContent: 'center',
    transform: [{translateX: 0}, {translateY: 0}]
  },

  toolTip:{
    position: 'absolute',   
    // bottom: '9rem' 

  },

  addButtonContainer:{
    width: '100%',
    backgroundColor: '#000'
  },

  addButtonView: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 48,
    padding: 32,
    width: '100%',
    // backgroundColor: '#000000',
    textAlign: 'center',
  },

  addButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
   },

});