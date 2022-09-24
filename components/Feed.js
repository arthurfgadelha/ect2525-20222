import { StyleSheet, Text, Image ,View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {
    return(
        <View style={styles.feed}>
        <View style={styles.post}>
            <View style={styles.postheader}>
                <View style={styles.postheaderesquerda}>
                  <Image style={styles.postheaderimg} source={require('../assets/imagens/reitoria.jpg')}/>
                  <Text>Reitoria</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size = {16} color="black"/>
            </View>
            <Image style={styles.postimg} source={require('../assets/imagens/reitoria.jpg')}/>
            <View style={styles.footer}>
              <FontAwesome5 style={styles.footericon} name="heart" size = {36} color="black"/>
              <FontAwesome5 name="comment" size = {36} color="black"/>
            </View>
        </View>
        <View style={styles.post}>
            <View style={styles.postheader}>
                <View style={styles.postheaderesquerda}>
                  <Image style={styles.postheaderimg} source={require('../assets/imagens/fisica.jpg')}/>
                  <Text>Fisica</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size = {16} color="black"/>
            </View>
            <Image style={styles.postimg} source={require('../assets/imagens/fisica.jpg')}/>
            <View style={styles.footer}>
              <FontAwesome5 style={styles.footericon} name="heart" size = {36} color="black"/>
              <FontAwesome5 name="comment" size = {36} color="black"/>
            </View>
        </View>
        <View style={styles.post}>
            <View style={styles.postheader}>
                <View style={styles.postheaderesquerda}>
                  <Image style={styles.postheaderimg} source={require('../assets/imagens/ect.jpg')}/>
                  <Text>ECT</Text>
                </View>
                <FontAwesome5 name="ellipsis-h" size = {16} color="black"/>
            </View>
            <Image style={styles.postimg} source={require('../assets/imagens/ect.jpg')}/>
            <View style={styles.footer}>
              <FontAwesome5 style={styles.footericon} name="heart" size = {36} color="black"/>
              <FontAwesome5 name="comment" size = {36} color="black"/>
            </View>
        </View>
    </View>
    );
}

const styles = StyleSheet.create({
    feed: {
      flex: 1,
      
    },
    post: {
  
    },
    postheader: {
      flexDirection: 'row',
      height: 50,
      alignItems: 'center',
      justifyContent: 'space-between',
      margin: 5,
    },
    postheaderesquerda: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    postheaderimg:{
      height: 50,
      width: 50,
      borderRadius: 25,
      marginRight: 5, 
    },
    postimg: {
      width: '100%',
    },
    footer: {
      height: 50,
      flexDirection: 'row',
      alignItems: 'center',
    },
    footericon: {
      margin: 5,
    }
  
  });