import React from 'react';
import { Stack, useNavigation, Link } from 'expo-router';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';
import { useEffect } from 'react';

interface HeaderProps {
  headerNumber: string;
}
const Header:React.FC<HeaderProps> = ({headerNumber}) => {

  return (

    // Header
    <View style={styles.header}>
            <Text style={styles.headerText}>
              {headerNumber}
              </Text>
    </View>
    // Header End

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
    fontWeight: "bold"
  },

});

export default Header;