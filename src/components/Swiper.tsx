import React, {useRef} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import Swiper,{SwiperProps} from 'react-native-deck-swiper';
import photoCards from '../utils/PhotoCards';
import Card from './Cards';
import IconButton from './IconButtons';
import OverlayLabel from './OverlayLabel';

const {width, height} = Dimensions.get('window');
const Devicewidth = Dimensions.get('window').width;
const Deviceheight = Dimensions.get('window').height;

const SwiperPage = () => {
  const useSwiper:any = useRef(null);

  const handleOnSwipedLeft = () => useSwiper.current.swipeLeft();
  const handleOnSwipedTop = () => useSwiper.current.swipeTop();
  const handleOnSwipedRight = () => useSwiper.current.swipeRight();

  return (
    <>
      <Swiper
        ref={useSwiper}
        animateCardOpacity
        cards={photoCards}
        renderCard={card => <Card card={card} />}
        cardIndex={0}
        backgroundColor="white"
        stackSize={2}
        infinite
        showSecondCard
        animateOverlayLabelsOpacity
        overlayLabels={{
          left: {
            title: 'NOPE',
            element: <OverlayLabel label="NOPE" color="#E5566D" />,
          },
          right: {
            title: 'LIKE',
            element: <OverlayLabel label="LIKE" color="#4CCC93" />,
            style: {
              wrapper: {
                alignItems: 'flex-start',
                marginLeft: 30,
              },
            },
          },
        }}
      />

      <View style={styles.IconView}>
        <IconButton
          name="close"
          onPress={handleOnSwipedLeft}
          color="white"
          backgroundColor="#E5566D"
        />
        <IconButton
          name="star"
          onPress={handleOnSwipedTop}
          color="white"
          backgroundColor="#3CA3FF"
        />
        <IconButton
          name="heart"
          onPress={handleOnSwipedRight}
          color="white"
          backgroundColor="#4CCC93"
        />
      </View>
    </>
  );
};

export default SwiperPage;

const styles = StyleSheet.create({
  IconView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: Deviceheight - 90,
  },
});
