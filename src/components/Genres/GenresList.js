import { IonCardHeader, IonList, IonItem, IonItemGroup, IonIcon, IonLabel, IonListHeader, IonTitle, IonToolbar, IonContent } from "@ionic/react";
import { chevronForwardOutline, filmOutline, map, tvOutline } from "ionicons/icons";
import { category } from "../../config/config";
import useFetch from "../useFetch";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";

const GenresList = (props) => {
  const { responseData: genres, error, isLoading } = useFetch(`${category}/${props.type}/list`);

  const categoryList = () => {
    return (
      <div>
        <IonList>
          {props.type === "movie" ? (
            <IonListHeader lines="inset">
              <IonIcon color="warning" className="icon" icon={filmOutline}></IonIcon>
              Movies
            </IonListHeader>
          ) : (
            <IonListHeader lines="inset">
              <IonIcon color="warning" className="icon" icon={tvOutline}></IonIcon>
              TV-Shows</IonListHeader>
          )

          }
          {genres.genres.map((genre) => (
            <Link className="item-link" to={`/${props.type}/genre/${genre.name}/${genre.id}`}>
              <IonItem>
                <IonLabel>{genre.name}</IonLabel>
                <IonIcon icon={chevronForwardOutline}></IonIcon>
              </IonItem>
            </Link>
          ))}
        </IonList>
      </div>
    )

  }
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          {categoryList()}
        </div>

      )}
    </div>
  )
}; export default GenresList;