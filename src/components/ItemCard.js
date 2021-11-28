import { IonCard, IonText, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";
import { useState } from "react";
import { img_300 } from "../config/config";
import { Link } from "react-router-dom";
import ItemPage from "./ItemPage";

const ItemCard = (props) => {
  return (
    <IonCard className="movie-card">
      <Link className="movie-link" to={`/${props.type}/${props.id}`}>
        <img src={`${img_300}/${props.poster}`} alt="poster" />
        <IonCardHeader className="movie-card-header">
          <IonCardSubtitle className="movie-card-rating">
            <IonIcon className="icon" icon={star} color="warning"></IonIcon>
            <IonText>{props.rating}</IonText>
            <IonCardTitle className="movie-card-title">{props.title}</IonCardTitle>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </Link>
    </IonCard>
  )
};

export default ItemCard;