import { img_300 } from "../config/config";
import { IonText, IonChip, IonLabel, IonButton, IonPopover, IonIcon, IonTitle, IonCardTitle } from "@ionic/react";
import useFetch from "./useFetch";
import { useParams } from "react-router";
import { specific } from "../config/config";
import LoadingSpinner from "./LoadingSpinner";
import ActorsSlider from "./ActorsSlider";
import GenresSlider from "./GenresSlider";
import { useState } from "react";
import { closeOutline, star } from "ionicons/icons";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

const ItemDetails = (props) => {
  const { id } = useParams();
  const { type } = useParams();
  const [showModal, setShowModal] = useState(false);
  const { responseData: credits, error, isLoading } = useFetch(`${specific}${type}/${id}/credits`);

  const displayRuntimeInHoursAndMin = () => {
    return (
      props.runtime % 60 === 0 ? (
        Math.floor(props.runtime / 60) + 'h'
      ) : (Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min'
      )
    )
  }

  const movieDescriptionPopover = () => {
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
          {movieDescriptionPopover()}
          <h4 className="move-page-title">{props.title}</h4>
          <div className="movie-page-date-runtime-genres">
            <IonText className="date-runtime">{props.release_date + " " + displayRuntimeInHoursAndMin()}</IonText>
            <div className="movie-page-genres">
            {GenresSlider(props.genres)}
            </div>
          </div>
          <IonIcon className="icon" icon={star} color="warning"></IonIcon>
            <IonText>{`${props.vote_average}/10`}</IonText>
          <div className="movie-page-overview">
            <img className="movie-page-poster" src={`${img_300}/${props.poster_path}`} alt="poster"></img>
            <IonText className="movie-page-text">{props.overview}</IonText>
          </div>
          <IonButton onClick={() => setShowModal(true)} fill="clear" size="small" className="show-full-text">Show more..</IonButton>
          <ActorsSlider {...credits} />
        </div>
      )}
    </div>
  )
};
export default ItemDetails;