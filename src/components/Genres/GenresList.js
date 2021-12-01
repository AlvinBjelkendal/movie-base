import { IonList, IonItem, IonIcon, IonLabel, IonListHeader } from "@ionic/react";
import { chevronForwardOutline, filmOutline, tvOutline } from "ionicons/icons";
import { category } from "../../config/config";
import useFetch from "../useFetch";
import LoadingSpinner from "../LoadingSpinner";
import { Link } from "react-router-dom";
import Error from "../Error";

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
            <Link key={genre.id} className="item-link" to={`/${props.type}/genre/${genre.name}/${genre.id}`}>
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
      {error !== null ? (
        <Error />
      ) : (
        <div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              {categoryList()}
            </div>
          )}
        </div>
      )}

    </div>
  )
}; export default GenresList;