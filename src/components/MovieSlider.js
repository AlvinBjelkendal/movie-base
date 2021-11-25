import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

const MovieSlider = (props) => {
  return (
    <IonPage><IonContent><Swiper><SwiperSlide>{props.movie}</SwiperSlide><SwiperSlide>Slide 2</SwiperSlide><SwiperSlide>Slide 3</SwiperSlide></Swiper></IonContent></IonPage>
  );
};
export default MovieSlider;