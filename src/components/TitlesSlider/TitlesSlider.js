import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import useFetch from '../useFetch';
import TitleCard from './TitleCard';

import 'swiper/swiper.min.css';
import '@ionic/react/css/ionic-swiper.css';
import LoadingSpinner from '../LoadingSpinner';
import { IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';

const TitlesSlider = (props) => {
  const { type } = useParams()

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
              <TitleCard {...title} type={props.type} />
            </SwiperSlide>
          ))
        )}
      </div>
    )
  }

  const recievedTitlesThroughProps = () => {
    return (
      <div className="slide">
        {props.titles.map((title) => (
          <SwiperSlide key={title.id}>
            <TitleCard {...title} type={type} />
          </SwiperSlide>
        ))}
      </div>
    )
  }

  return (
    <div>
      <IonToolbar>
        <h3 className="slider-title">{props.title}</h3>
      </IonToolbar>
      <Swiper spaceBetween={-15} slidesPerView={2.5}>
        {props.titles === undefined & props.category !== undefined ? (FetchTitles()) : (recievedTitlesThroughProps())}
      </Swiper>
    </div>
  );
};
export default TitlesSlider;