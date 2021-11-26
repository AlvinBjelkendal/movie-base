import { avatarPlaceholder, img_300 } from "../config/config";
import { IonImg, IonText, IonChip, IonLabel, IonIcon } from "@ionic/react";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import { specificMovie } from "../config/config";
import LoadingSpinner from "./LoadingSpinner";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

const MoviePageDetails = (props) => {
  const { id } = useParams();
  const { responseData: credits, error, isLoading } = useFetch(`${specificMovie}${id}/credits`);
  console.log(credits);

  const displayRuntimeInHoursAndMin = () => {
    return (Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min')
  }

  const displayTopActors = () => {
    return (
      <div className="movie-page-actors">
        <IonText>Cast</IonText>
        <Swiper slidesPerView={4}>
          {
            credits && credits.cast.map((actor) => (
              <SwiperSlide>
                <IonChip outline={true} color="white">
                {actor.profile_path === null ? (
                  <IonImg class="actor-image" src={avatarPlaceholder} alt="img"></IonImg>
                 ) : (
                <IonImg class="actor-image" src={`${img_300}/${actor.profile_path}`} alt="img"></IonImg>
                )}
                  <IonLabel className="actor-chip">{actor.name}</IonLabel>
                </IonChip>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    )
  }

  return (
    <div>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="movie-page-details">
          <h3>{props.title}</h3>
          <IonText>{props.release_date + " " + displayRuntimeInHoursAndMin()}</IonText>
          <div className="movie-page-overview">
            <img className="movie-page-poster" src={`${img_300}/${props.poster_path}`} alt="poster"></img>
            <IonText className="movie-page-text">{props.overview}</IonText>
          </div>
          {displayTopActors()}
        </div>
      )}
    </div>
  )
};
export default MoviePageDetails;