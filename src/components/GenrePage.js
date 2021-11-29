import { useParams } from "react-router";
import { discover, trendingToday } from "../config/config";
import useFetch from "./useFetch";
import { IonContent, IonTitle } from "@ionic/react";
import ItemSlider from "./ItemSlider";
import LoadingSpinner from "./LoadingSpinner";


const GenrePage = () => {
  const { type } = useParams();
  const { id } = useParams();
  const { responseData: items, error, isLoading } = useFetch(`${discover}${type}?&with_genres=${id}`);
  console.log(items.results);

  return (
    <IonContent>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <IonTitle>{id}</IonTitle>
          <ItemSlider title={"test"} titles={items.results} type="movie" />
        </div>
      )}
    </IonContent>
  )
}; export default GenrePage