import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import useFetch from './useFetch';
import ItemCard from './ItemCard';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import LoadingSpinner from './LoadingSpinner';

const ItemSlider = (props) => {

  const FetchTitles = () => {
    const { responseData: items, error, isLoading } = useFetch(`${props.category}`)
    return (
      <div className="slide">
        {error && <div>{error}</div>}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          items && items.results.map((title) => (
            <SwiperSlide key={title.id}>
              <ItemCard {...title} type={props.type} />
            </SwiperSlide>
          ))
        )}
      </div>
    )
  }

  const recievedTitlesThroughProps = () => {
    return (
      <div className="slide">
        {props.titles && props.titles.map((title) => (
          <SwiperSlide key={title.id}>
            <ItemCard {...title} type={props.type} />
          </SwiperSlide>
        ))}
      </div>
    )
  }

  return (
    <div>
      <p className="slider-title">{props.title}</p>
      <Swiper spaceBetween={-15} slidesPerView={2.5}>
        {props.titles === undefined & props.category !== undefined ? (FetchTitles()) : (recievedTitlesThroughProps())}
      </Swiper>
    </div>
  );
};
export default ItemSlider;