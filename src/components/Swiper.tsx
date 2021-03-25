import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import photoCards from '../utils/PhotoCards';
import Card from './Cards';
import IconButton from './IconButtons';
import OverlayLabel from './OverlayLabel';
const SwiperPage = () => {
  const useSwiper = useRef(null).current;
//   const handleOnSwipedLeft = () => useSwiper.swipeLeft();
//   const handleOnSwipedTop = () => useSwiper.swipeTop();
//   const handleOnSwipedRight = () => useSwiper.swipeRight();

const handleOnSwipedLeft = () => console.log("swipeLeft");
  const handleOnSwipedTop = () => console.log('swipeTop');
  const handleOnSwipedRight = () => console.log('swipeRight');

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
      <View>
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