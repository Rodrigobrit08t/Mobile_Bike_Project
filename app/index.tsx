import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Text>Oi</Text>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
