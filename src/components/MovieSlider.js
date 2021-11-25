import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import useFetch from './useFetch';
import { trendingday } from '../config/config';
import MovieCard from './MovieCard';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';

const MovieSlider = (props) => {
  const { responseData: trending, error, isLoading } = useFetch(`${trendingday}`)

  return (
      <IonContent>
        {error && <div>{error}</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Swiper slidesPerView={4}>
            <div className="trending">
              {
                trending && trending.results.map((t) => (
                  <SwiperSlide className="slide">
                    <MovieCard key={t.id} id={t.id}
                      title={t.title || t.name}
                      poster={t.poster_path}
                      media_type={t.media_type}
                      rating={t.vote_average}
                    />
                  </SwiperSlide>
                ))
              }
            </div>
          </Swiper>
        )}
      </IonContent>
  );
};
export default MovieSlider;