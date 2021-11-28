import { avatarPlaceholder, img_300 } from "../config/config";
import { IonImg, IonText, IonChip, IonLabel } from "@ionic/react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

const ActorsSlider = (props) => {
  return (
    <div className="movie-page-actors">
      <IonText>Cast</IonText>
      <Swiper slidesPerView={3.5}>
        {
          props && props.cast.map((actor) => (
            <SwiperSlide key={actor.id}>
              <IonChip outline={true} color="white">
              {actor.profile_path === null ? (
                <IonImg class="actor-image" src={avatarPlaceholder} alt="img"></IonImg>
               ) : (
              <IonImg class="actor-image" src={`${img_300}/${actor.profile_path}`} alt="img"></IonImg>
              )}
                <IonLabel className="actor-name">{actor.name}</IonLabel>
              </IonChip>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
};
export default ActorsSlider;