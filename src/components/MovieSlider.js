import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import useFetch from './useFetch';
import { trendingday } from '../config/config';
import MovieCard from './MovieCard';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Link } from 'react-router-dom';

const MovieSlider = (props) => {
  const { responseData: movies, error, isLoading } = useFetch(`${props.category}`)

  return (
      <IonContent>
        {error && <div>{error}</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Swiper slidesPerView={4}>
            <div className="trending">
              {
                movies && movies.results.map((m) => (
        
                  <SwiperSlide className="slide">
                    <MovieCard key={m.id} id={m.id}
                      title={m.title || m.name}
                      poster={m.poster_path}
                      media_type={m.media_type}
                      rating={m.vote_average}
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