import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import useFetch from './useFetch';
import { trendingday } from '../config/config';
import ItemCard from './ItemCard';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import LoadingSpinner from './LoadingSpinner';

const MovieSlider = (props) => {
  const { responseData: movies, error, isLoading } = useFetch(`${props.category}`)

  console.log(movies);
  return (
    <div className="slide">
      <p className="slider-title">{props.title}</p>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Swiper spaceBetween={-15} slidesPerView={2.5}>
          {
            movies && movies.results.map((m) => (

              <SwiperSlide key={m.id}>
                <ItemCard key={m.id} id={m.id}
                  title={m.title || m.name}
                  poster={m.poster_path}
                  media_type={m.media_type}
                  rating={m.vote_average}
                  type={props.type}
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