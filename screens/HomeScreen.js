import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image ,View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';

import Header from '../components/Header';
import Stories from '../components/Stories';
import Feed from '../components/Feed';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <Header navigation={navigation}/>
        <Stories/>
        <Feed/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
   }
});