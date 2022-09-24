import { StyleSheet, Text, Image ,View, FlatList } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Feed() {

  const feed = [
    {
    id: 1,
    nome: 'UFRN',
    imgPerfil: require('../assets/imagens/ufrn.jpg'),
    img: require('../assets/imagens/ufrn.jpg'),
    aspectRatio: 1.000,
  },
  {
    id: 2,
    nome: 'Fisica',
    imgPerfil: require('../assets/imagens/fisica.jpg'),
    img: require('../assets/imagens/fisica.jpg'),
    aspectRatio: 1.566,
  },
  {
    id: 3,
    nome: 'Reitoria',
    imgPerfil: require('../assets/imagens/reitoria.jpg'),
    img: require('../assets/imagens/reitoria.jpg'),
    aspectRatio: 2.005,
  },
  {
    id: 4,
    nome: 'ECT',
    imgPerfil: require('../assets/imagens/ect.jpg'),
    img: require('../assets/imagens/ect.jpg'),
    aspectRatio: 1.788,
  },
];

  function renderItem({item}){
    return <View style={styles.post}>
    <View style={styles.postheader}>
        <View style={styles.postheaderesquerda}>
          <Image style={styles.postheaderimg} source={item.imgPerfil}/>
          <Text>{item.nome}</Text>
        </View>
        <FontAwesome5 name="ellipsis-h" size = {16} color="black"/>
    </View>
    <Image style={styles.postimg} source={item.img}/>
    <View style={styles.footer}>
      <FontAwesome5 style={styles.footericon} name="heart" size = {36} color="black"/>
      <FontAwesome5 style={styles.footericon} name="comment" size = {36} color="black"/>
    </View>
</View>
  }



    return(
        <View style={styles.feed}>
          <FlatList 
            data={feed}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
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