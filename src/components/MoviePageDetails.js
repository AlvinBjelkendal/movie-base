import { img_300 } from "../config/config";
import { IonText, IonChip, IonLabel, IonButton, IonPopover, IonIcon } from "@ionic/react";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import { specificMovie } from "../config/config";
import LoadingSpinner from "./LoadingSpinner";
import MoviePageActors from "./MoviePageActors";
import { useState } from "react";
import { closeOutline } from "ionicons/icons";

const MoviePageDetails = (props) => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { responseData: credits, error, isLoading } = useFetch(`${specificMovie}${id}/credits`);

  const displayRuntimeInHoursAndMin = () => {
    return (
      props.runtime % 60 === 0 ? (
        Math.floor(props.runtime / 60) + 'h'
      ) : (Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min'
      )
    )
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

  const displayFullText = () => {
    return (
      <IonPopover
        cssClass="movie-popover"
        isOpen={showModal}
        onDidDismiss={() => setShowModal(false)}
      >
        <IonButton onClick={() => setShowModal(false)} className="close-popover" size="small" fill="clear">
          <IonIcon icon={closeOutline}></IonIcon>
        </IonButton>
        <div className="movie-popover-text">
          <IonText>{props.overview}</IonText>
        </div>
      </IonPopover>
    )
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="movie-page-details">
          {displayFullText()}
          <h3>{props.title}</h3>
          <div className="movie-page-date-runtime-genres">
            <IonText className="date-runtime">{props.release_date + " " + displayRuntimeInHoursAndMin()}</IonText>
            <div className="movie-page-genres">
              {displayGenres()}
            </div>
          </div>
          <div className="movie-page-overview">
            <img className="movie-page-poster" src={`${img_300}/${props.poster_path}`} alt="poster"></img>
            <IonText className="movie-page-text">{props.overview}</IonText>
          </div>
          <IonButton onClick={() => setShowModal(true)} fill="clear" size="small" className="show-full-text">Show more..</IonButton>
          <MoviePageActors {...credits} />
        </div>
      )}
    </div>
  )
};
export default MoviePageDetails;