import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";
import { useState } from "react";
import { img_300 } from "../config/config";
import { Link } from "react-router-dom";
import MoviePage from "./MoviePage";

const MovieCard = (props) => {
  return (
    <IonCard className="movie-card">
      <Link className="movie-link" to={`/movie/${props.id}`}>
        <img src={`${img_300}/${props.poster}`} alt="poster" />
        <IonCardHeader className="movie-card-header">
          <IonCardSubtitle color="warning" className="movie-card-rating">
            <IonIcon className="icon" icon={star} color="warning"></IonIcon>
            {props.rating}
            <IonCardTitle className="movie-card-title">{props.title}</IonCardTitle>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </Link>
    </IonCard>
  )
};

export default MovieCard;