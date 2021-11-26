import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import useFetch from './useFetch';
import { trendingday } from '../config/config';
import MovieCard from './MovieCard';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import { Link } from 'react-router-dom';
import MoviePage from './MoviePage';
import LoadingSpinner from './LoadingSpinner';

const MovieSlider = (props) => {
  const { responseData: movies, error, isLoading } = useFetch(`${props.category}`)

  return (
    <div className="slide">
      <p className="slider-title">{props.title}</p>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Swiper spaceBetween={-20} slidesPerView={2.5}>
          {
            movies && movies.results.map((m) => (

              <SwiperSlide key={m.id}>
                <MovieCard key={m.id} id={m.id}
                  title={m.title || m.name}
                  poster={m.poster_path}
                  media_type={m.media_type}
                  rating={m.vote_average}
                />
              </SwiperSlide>

            ))
          }
        </Swiper>
      )}
    </div>
  );
};
export default MovieSlider;