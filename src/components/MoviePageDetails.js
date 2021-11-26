import { avatarPlaceholder, img_300 } from "../config/config";
import { IonImg, IonText, IonChip, IonLabel, IonIcon, IonBadge } from "@ionic/react";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import { specificMovie } from "../config/config";
import LoadingSpinner from "./LoadingSpinner";
import MoviePageActors from "./MoviePageActors";

const MoviePageDetails = (props) => {
  const { id } = useParams();
  const { responseData: credits, error, isLoading } = useFetch(`${specificMovie}${id}/credits`);

  const displayRuntimeInHoursAndMin = () => {
    return (Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min')
  }

  const displayGenres = () => {
    return (
      props.genres.map((genre) => (
        <IonChip className="genre-chip" outline={true} color="white">
          <IonLabel>
            {genre.name}
          </IonLabel>
        </IonChip>
      ))
    )
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="movie-page-details">
          <h3>{props.title}</h3>
          <IonText>{props.release_date + " " + displayRuntimeInHoursAndMin()}</IonText>
          {displayGenres()}
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