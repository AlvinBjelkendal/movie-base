import { IonCard, IonText, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";
import { useState } from "react";
import { img_300 } from "../config/config";
import { Link } from "react-router-dom";
import ItemPage from "./ItemPage/ItemPage";

const ItemCard = (props) => {
  return (
    <IonCard className="item-card">
      <Link className="item-link" to={`/${props.type}/${props.id}`}>
        <img src={`${img_300}/${props.poster}`} alt="poster" />
        <IonCardHeader className="item-card-header">
          <IonCardSubtitle className="item-card-rating">
            <IonIcon className="icon" icon={star} color="warning"></IonIcon>
            <IonText>{props.rating}</IonText>
            <IonCardTitle className="item-card-title">{props.title}</IonCardTitle>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </Link>
    </IonCard>
  )
};

export default ItemCard;