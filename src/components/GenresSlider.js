import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { IonChip, IonLabel } from '@ionic/react';

const GenresSlider = (genres) => {
  return (
    <Swiper slidesPerView={2.5}>
      {genres.map((genre) => (
        <SwiperSlide>
          <IonChip className="genre-chip" outline={true} color="white">
            <IonLabel className="genre-chip-name">
              {genre.name}
            </IonLabel>
          </IonChip>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}; export default GenresSlider;