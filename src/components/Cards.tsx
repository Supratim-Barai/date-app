import React, {FC} from 'react';
import {View, Text, Image, ImageSourcePropType} from 'react-native';
import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

interface cardProps {
  card: any;
}
const Card: FC<cardProps> = ({card}) => (
  <View style={styles.card}>
    <Image style={styles.image} source={{uri:card.photo}} resizeMode="cover" />
    <View style={styles.photoDescriptionContainer}>
      <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
    </View>
  </View>
);

export default Card;

const styles = StyleSheet.create({
  card: {
    height: height-180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.5,
    elevation: 2,
  },
  image: {
    borderRadius: 5,
    flex: 1,
    width: '100%',
  },
  photoDescriptionContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%',
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: '#F5F5F5',
    textShadowColor: '#000',
    textShadowRadius: 10,
  },
});
