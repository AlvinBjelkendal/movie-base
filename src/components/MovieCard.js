import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";
import { useState } from "react";
import { img_300 } from "../config/config";

const MovieCard = ({id, poster, title, rating, media_type}) => {
  return (
   
      <IonCard>
        <img src={`${img_300}/${poster}`} alt="poster" />
        <IonCardHeader>
           <IonCardTitle>{title}</IonCardTitle>
           <IonCardSubtitle>
             {rating}
             <IonIcon icon={star}></IonIcon>
           </IonCardSubtitle>
         </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </IonCard>
  )
};

export default MovieCard;