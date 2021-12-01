import { IonCard, IonText, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonImg } from "@ionic/react";
import { star } from "ionicons/icons";
import { posterPlaceholder, img_300 } from "../config/config";
import { Link } from "react-router-dom";

const ItemCard = (props) => {
  return (
    <IonCard className="item-card">
      <Link className="item-link" to={`/${props.type}/${props.id}`}>
        {props.poster_path === null ? (
          <IonImg src={posterPlaceholder} alt="poster" />
        ) : (
          <IonImg src={`${img_300}/${props.poster_path}`} alt="poster" />
        )}
        <IonCardHeader className="item-card-header">
          <IonCardSubtitle className="item-card-rating">
            <IonIcon className="icon" icon={star} color="warning"></IonIcon>
            <IonText>{props.vote_average}</IonText>
            <IonCardTitle className="item-card-title">{props.title || props.name}</IonCardTitle>
          </IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        </IonCardContent>
      </Link>
    </IonCard>
  )
};

export default ItemCard;