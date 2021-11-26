import { avatarPlaceholder, img_300 } from "../config/config";
import { IonImg, IonText, IonChip, IonLabel, IonIcon } from "@ionic/react";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import { specificMovie } from "../config/config";
import LoadingSpinner from "./LoadingSpinner";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import MoviePageActors from "./MoviePageActors";

const MoviePageDetails = (props) => {
  const { id } = useParams();
  const { responseData: credits, error, isLoading } = useFetch(`${specificMovie}${id}/credits`);
  console.log(credits);

  const displayRuntimeInHoursAndMin = () => {
    return (Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min')
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
          <MoviePageActors {...credits} />
        </div>
      )}
    </div>
  )
};
export default MoviePageDetails;