import { useParams } from "react-router";
import { discover } from "../../config/config";
import useFetch from "../useFetch";
import { IonContent } from "@ionic/react";
import ItemSlider from "../ItemSlider";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";


const GenrePage = () => {
  const { type } = useParams();
  const { id } = useParams();
  const { genre } = useParams();
  const { responseData: items, error, isLoading } = useFetch(`${discover}${type}?&with_genres=${id}`);
  console.log(error);
  

  return (
    <IonContent>
      {error && console.log('fsaf')}
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