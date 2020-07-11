import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Screen1 = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <Text>Screen One</Text>
      <Button title="next" />
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

export default Screen1;
