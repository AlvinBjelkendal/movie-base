import { IonContent } from "@ionic/react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import { specific } from "../../config/config";
import LoadingSpinner from "../LoadingSpinner";
import TitleTrailer from "./TitleTrailer";
import ItemDetails from "./TitleDetails";
import Error from "../Error";

const TitlePage = () => {
  const { id } = useParams();
  const { type } = useParams();
  const { responseData: item, error, isLoading } = useFetch(`${specific}${type}/${id}`);

  return (
    <IonContent className="item-page">
      {error !== null ? (
        <Error />
      ) : (
        <div>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              <TitleTrailer {...item} />
              <ItemDetails {...item} />
            </div>
          )}
        </div>
      )}
    </IonContent>
  )
};
export default TitlePage;