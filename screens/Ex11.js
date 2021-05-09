import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Ex11() {
  return (
    <View style={{ flex : 1 }}>
      <View style={{ backgroundColor : '#4A90E2' , width : 500 , height : 500}}></View>
      <View style={{ backgroundColor : '#50E3C2' , width : 500 , height : 500}}></View>      
    </View>
  );
}