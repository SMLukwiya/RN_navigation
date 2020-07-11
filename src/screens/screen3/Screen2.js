import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen2 = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Screen One</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Screen2;
