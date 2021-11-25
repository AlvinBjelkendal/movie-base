import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";
import { useState } from "react";
import { img_300 } from "../config/config";

const MovieCard = ({id, poster, title, rating, media_type}) => {
  return (
   
      <IonCard className="movie-card">
        <img src={`${img_300}/${poster}`} alt="poster" />
        <IonCardHeader className="movie-card-header">
           <IonCardSubtitle color="warning" className="movie-card-rating">
             <IonIcon className="icon" icon={star} color="warning"></IonIcon>
             {rating}
           <IonCardTitle className="movie-card-title">{title}</IonCardTitle>
           </IonCardSubtitle>
         </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </IonCard>
  )
};

export default MovieCard;