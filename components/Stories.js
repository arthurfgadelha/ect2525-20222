import React from 'react';
import { StyleSheet, Text, Image ,View } from 'react-native';


export default function Stories () {
    return(
    <View style={styles.stories}>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('../assets/imagens/ufrn.jpg')} />
            <Text>UFRN</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('../assets/imagens/fisica.jpg')} />
            <Text>Fisica</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('../assets/imagens/reitoria.jpg')} />
            <Text>Reitoria</Text>
          </View>
          <View style={styles.story}>
            <Image style={styles.imgstory} source={require('../assets/imagens/ect.jpg')} />
            <Text>ECT</Text>
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    stories: {
      flexDirection: 'row',
      height: 90,
    },
    story: {
      height: 90,
      width: 90,
      alignItems: 'center'
    },
    imgstory: {
      width: 70,
      height: 70,
      borderRadius: 35,
    }
  
  });