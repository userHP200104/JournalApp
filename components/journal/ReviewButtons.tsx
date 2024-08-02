import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface ReviewButtonsProps {
  navigation: any;
  prevScreen: string;
  nextScreen: string;
  nextButton: string;
}

const ReviewButtons: React.FC<ReviewButtonsProps> = ({ navigation, prevScreen, nextScreen, nextButton }) => {
  return (
    // Buttons
    <View style={styles.buttonContainer}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(prevScreen)}>
        <Text style={styles.backButtonText}>&lt;&nbsp;Back</Text>
      </TouchableOpacity>
      {/* Back Button End */}

      {/* Next Button */}
      <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate(nextScreen)}>
        <Text style={styles.nextButtonText}>{nextButton}</Text>
      </TouchableOpacity>
      {/* Next Button End */}
    </View>
    // Buttons End
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 32,
    paddingBottom: 48,
    borderTopWidth: 1,
    borderTopColor: '#000000',
    backgroundColor: '#FFF',
    position: 'absolute',
    bottom: -1,
    zIndex: 9999,
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

export default ReviewButtons;
