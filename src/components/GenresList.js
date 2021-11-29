import { IonCardHeader, IonList, IonItem, IonItemGroup, IonIcon, IonLabel, IonListHeader, IonTitle, IonToolbar, IonContent } from "@ionic/react";
import { chevronForwardOutline, filmOutline, map, tvOutline } from "ionicons/icons";
import { category } from "../config/config";
import useFetch from "./useFetch";
import LoadingSpinner from "./LoadingSpinner";

const GenresList = (props) => {
  const { responseData: genres, error, isLoading } = useFetch(`${category}/${props.type}/list`);
  console.log(genres);

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
              Tv-Shows</IonListHeader>
          )

          }
          {genres.genres.map((genre) => (
            <IonItem>
              <IonLabel>{genre.name}</IonLabel>
              <IonIcon icon={chevronForwardOutline}></IonIcon>
            </IonItem>
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