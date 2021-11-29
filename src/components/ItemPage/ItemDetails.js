import { img_300 } from "../../config/config";
import { IonText, IonRow, IonCol, IonChip, IonLabel, IonButton, IonPopover, IonIcon, IonTitle, IonCardTitle } from "@ionic/react";
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
              <IonText>{props.release_date + " " + displayRuntimeInHoursAndMin()}</IonText>
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
            <IonCol>
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