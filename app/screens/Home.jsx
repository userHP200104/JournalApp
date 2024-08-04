import { Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import { useState, useEffect } from 'react';

export default function Home( { navigation } ) {

  return (


    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>

      {/* Header */}        
      <View style={styles.header}>
        <Text style={styles.headerText}>Journal Entries</Text>
      </View>
      {/* Header End*/}

      {/* Journal Entry Display */}
      <View style={styles.entryStorage}>
        <Text style={styles.emptyTextOne}>It feels a bit empty in here 😅.</Text>

      </View>

        <TouchableOpacity style={styles.addButtonContainer} onPress={() => navigation.navigate('JournalQuestion1')}>
          <View style={styles.addButtonView}>
            <Text style={styles.addButtonText}>+ Add Entry</Text>
          </View>
        </TouchableOpacity>      
      {/* Add Journal Entry Button End*/}
      
    </View>
  );
}

const styles = StyleSheet.create({

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

  entryStorage: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  emptyTextOne: {
    textAlign: 'center',
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