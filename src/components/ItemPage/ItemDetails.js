import { img_300 } from "../../config/config";
import { IonText, IonRow, IonCol, IonButton, IonPopover, IonIcon } from "@ionic/react";
import useFetch from "../useFetch";
import { useParams } from "react-router";
import { specific } from "../../config/config";
import LoadingSpinner from "../LoadingSpinner";
import ActorsSlider from "./ActorsSlider";
import GenresSlider from "./GenresSlider";
import { useState } from "react";
import { closeOutline, star } from "ionicons/icons";

const ItemDetails = (props) => {
  const { id } = useParams();
  const { type } = useParams();
  const [showPopover, setShowPopover] = useState(false);
  const { responseData: credits, error, isLoading } = useFetch(`${specific}${type}/${id}/credits`);

  const displayRuntimeInHoursAndMin = () => {
    return (
      props.runtime % 60 === 0 ? (
        Math.floor(props.runtime / 60) + 'h'
      ) : (Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min'
      )
    )
  }

  const displayAiredYears = () => {
    return (
      props.first_air_date.slice(0, 4) === props.last_air_date.slice(0, 4) && props.number_of_seasons < 2 ? (
        <IonText>{props.number_of_seasons + " Season " + props.last_air_date.slice(0, 4)} </IonText>
      ) : (
        <IonText>{props.number_of_seasons + " Seasons " + props.first_air_date.slice(0, 4) + " - " + props.last_air_date.slice(0, 4)} </IonText>
      )
    )
  }

  const movieDescriptionPopover = () => {
    return (
      <IonPopover
        cssClass="item-page-popover"
        isOpen={showPopover}
        onDidDismiss={() => setShowPopover(false)}
      >
        <IonButton onClick={() => setShowPopover(false)} className="close-popover" size="small" fill="clear">
          <IonIcon icon={closeOutline}></IonIcon>
        </IonButton>
        <div className="popover-text">
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
        <div>
          {movieDescriptionPopover()}
          <IonRow>
            <IonCol className="ion-align-items-start">
              <h4>{props.title}</h4>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              {type === "movie" ? (<IonText>{props.release_date + " " + displayRuntimeInHoursAndMin()}</IonText>) : (
                displayAiredYears()
              )}
            </IonCol>
            <IonCol size="6">
              {GenresSlider(props.genres)}
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonIcon className="icon" icon={star} color="warning"></IonIcon>
              <IonText>{`${props.vote_average}/10`}</IonText>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="4">
              <img className="item-page-poster" src={`${img_300}/${props.poster_path}`} alt="poster"></img>
            </IonCol>
            <IonCol size="9">
              <IonText className="item-page-text">{props.overview}</IonText>
              <IonButton onClick={() => setShowPopover(true)} fill="clear" size="small" className="show-full-text">Show more..</IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <ActorsSlider {...credits} />
            </IonCol>
          </IonRow>
        </div>
      )}
    </div>
  )
};
export default ItemDetails;