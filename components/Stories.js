import React from 'react';
import { StyleSheet, Text, Image ,View, FlatList } from 'react-native';


export default function Stories () {
    const stories = [
      {
      id: 1,
      nome: 'UFRN',
      src: require('../assets/imagens/ufrn.jpg'),
    },
    {
      id: 2,
      nome: 'Fisica',
      src: require('../assets/imagens/fisica.jpg'),
    },
    {
      id: 3,
      nome: 'Reitoria',
      src: require('../assets/imagens/reitoria.jpg'),
    },
    {
      id: 4,
      nome: 'ECT',
      src: require('../assets/imagens/ect.jpg'),
    },
  ];
  
  function renderItem({item}) {
    return <View style={styles.story}>
    <Image style={styles.imgstory} source={item.src} />
    <Text>{item.nome}</Text>
  </View>
  }
  
  return(
    <View style={styles.stories}>
          <FlatList
            data={stories}
            renderItem={renderItem}
            keyExtractor={item =>item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
          /> 
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