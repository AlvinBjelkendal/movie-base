import { useParams } from "react-router";
import { discover, trendingToday } from "../../config/config";
import useFetch from "../useFetch";
import { IonContent, IonTitle } from "@ionic/react";
import ItemSlider from "../ItemSlider";
import LoadingSpinner from "../LoadingSpinner";


const GenrePage = () => {
  const { type } = useParams();
  const { id } = useParams();
  const { genre } = useParams();
  const { responseData: items, error, isLoading } = useFetch(`${discover}${type}?&with_genres=${id}`);

  return (
    <IonContent>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <ItemSlider title={`Popular ${genre} titles`} titles={items.results} />
        </div>
      )}
    </IonContent>
  )
}; export default GenrePage