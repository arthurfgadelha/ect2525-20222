import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image ,View } from 'react-native';
import React from 'react';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Image style={styles.ufrngram} source={require('./assets/imagens/ufrngram.png')}/>
        <FontAwesome5 name="paper-plane" size = {24} color="black"/>
      </View>
        <View style={styles.stories}>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/imagens/ufrn.jpg')} />
            <Text>UFRN</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/imagens/fisica.jpg')} />
            <Text>Fisica</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/imagens/reitoria.jpg')} />
            <Text>Reitoria</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('./assets/imagens/ect.jpg')} />
            <Text>ECT</Text>
          </View>
        </View>
        <View style={styles.feed}>
            <View style={styles.post}>
              
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
   },
  header:{
    flexDirection: 'row',
    padding: 10,
    height: 50, 
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ufrngram:{
    height: 25,
    width: 110,
  },
  stories:{
    flexDirection: 'row',
    height: 25,
  },
  story:{
    height: 90,
    width: 90,
    alignItems: 'center'
  },
  imgstory:{
    width: 70,
    height: 70,
    borderRadius:35,
  },
  feed:{
    flex: 1,
    backgroundColor: 'Red',
  }
});
