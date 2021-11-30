import { useParams } from "react-router";
import { discover } from "../../config/config";
import useFetch from "../useFetch";
import { IonContent } from "@ionic/react";
import ItemSlider from "../ItemSlider";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";
import { BackButton } from "../BackButton";


const GenresPage = () => {
  const { type } = useParams();
  const { id } = useParams();
  const { genre } = useParams();
  const { responseData: items, error, isLoading } = useFetch(`${discover}${type}?&with_genres=${id}`);
  console.log(error);


  return (
    <IonContent>
      <BackButton />
      {error !== null ? (
        <Error />
        ) : (
          <div>
          {isLoading ? (
            <LoadingSpinner />
            ) : (
              <div>
              <ItemSlider title={`Popular ${genre} titles`} titles={items.results} />
            </div>
          )}
        </div>
      )}
    </IonContent>
  )
}; export default GenresPage