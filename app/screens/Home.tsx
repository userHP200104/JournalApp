import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
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
  isDone: boolean;
}


export default function Home({ navigation }: HomeProps) {
  const [entries, setEntries] = useState<Entry[]>([]);

  const clearStorage = async () => {
    try {
      await AsyncStorage.clear();
      setEntries([]); // Clear the state after clearing the storage
      // alert('Storage successfully cleared!');
    } catch (e) {
      // alert('Failed to clear the async storage. ' + e);
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

  const renderItem = ({ item }: { item: Entry }) => ((item.isDone == true) &&
    (<TouchableOpacity
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
    </TouchableOpacity>)
  );

  const [timeRemaining, setTimeRemaining] = useState<number>(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTimeRemaining(): number {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999);

    const difference = endOfDay.getTime() - now.getTime();
    return Math.max(difference, 0); // Ensure timeRemaining is not negative
  }

  function formatTime(ms: number): string {
    const seconds = Math.floor(ms / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
  }

  ////////////////////////////////////////////////////////////////

  // Function to get today's date in ISO format
const getTodayDateString = (): string => {
  const today = new Date();
  // Convert to ISO format (assuming the ID format is similar to ISO strings)
  return today.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
};

const [entryMade, setEntryMade] = useState(false);

// Function to check if any entry ID matches today's date
const checkForEntriesMadeToday = async () => {
  try {
    const ids = await getAllEntryIds(); // Fetch all entry IDs

    const todayDateString = getTodayDateString();

    const entryMadeToday = ids.some(id => id.startsWith(todayDateString));

    setEntryMade(entryMadeToday);
    
  } catch (error) {
    console.error('Failed to fetch or process AsyncStorage data:', error);
  }
};

// Function to fetch all entry IDs (for completeness)
const getAllEntryIds = async (): Promise<string[]> => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const entries = await AsyncStorage.multiGet(keys);

    const entryIds: string[] = entries
      .map(([key, value]) => {
        try {
          const entry = JSON.parse(value || '{}');
          return entry.id ? entry.id : null;
        } catch (e) {
          console.error(`Failed to parse entry with key ${key}:`, e);
          return null;
        }
      })
      .filter((id): id is string => id !== null);

    return entryIds;

  } catch (error) {
    console.error('Failed to fetch or process AsyncStorage data:', error);
    return [];
  }
};

useFocusEffect(
  useCallback(() => {
    fetchEntries();
    checkForEntriesMadeToday();
    console.log(entryMade);
  }, [entryMade])
);

// useEffect(() => {
//     checkForEntriesMadeToday();
//     console.log(entryMade);

// }, [entryMade]);


  return (


    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      {/* Header */}        
      <View style={styles.header}>
        <Text style={styles.headerText}>My Entries</Text>
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
        <Text style={styles.buttonText}>Delete All</Text>
      </TouchableOpacity>

      {(entryMade)?
      (<View style={styles.timerView}>
          <Text style={styles.timerText1}>{'Time till next entry'}</Text>
          <Text style={styles.timerText2}>{formatTime(timeRemaining)}</Text>
      </View>)
      :
      (<TouchableOpacity style={styles.addButtonContainer} onPress={() => navigation.navigate('JournalQuestions')}>
        <View style={styles.addButtonView}>
          <Text style={styles.addButtonText}>Write today's entry</Text>
          <FontAwesome6 name={'pen-to-square'} color={'#fefefe'} size={24}/>
        </View>
      </TouchableOpacity>      )
      }
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
    color: '#1a1a1a10',
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
    borderBottomColor: '#00000020'
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 100,
    padding: 32,
    borderBottomWidth: 1,
    borderBottomColor: '#00000020',
    width: '100%',
  },

  headerText: {
    fontSize: 48,
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
    paddingVertical: '68%',
    fontSize: 24,
    fontWeight: 'bold',

    // paddingTop: '100%',
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
    backgroundColor: '#1a1a1a',
    marginBottom: 48,
    borderRadius: 64,
  },

  addButtonView: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    textAlign: 'center',
    gap: 12,
  },

  addButtonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fefefe',
   },

  timerText1: {
    fontSize: 24,
    fontWeight: '700',
    color: '#aaa',
   },

  timerText2: {
    fontSize: 32,
    fontWeight: '700',
    color: '#aaa',
   },

   timerView:{
     backgroundColor: '#e9e9e9',
    // borderColor: '#1a1a1a',
    // borderWidth: 1,
    marginBottom: 48,
    borderRadius: 16,
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    paddingHorizontal: 32,
    textAlign: 'center',
    gap: 12,
   },
});


/*
TODO: 
- once an entry has been made for the day the create button is disabled
  and shows a timmer for when it enables again

*/