import { IonContent } from "@ionic/react";
import { useState } from "react";
import useFetch from "./useFetch";
import { Link, useParams } from "react-router-dom";
import { specific } from "../config/config";
import LoadingSpinner from "./LoadingSpinner";
import ItemTrailer from "./ItemTrailer";
import ItemDetails from "./ItemDetails";

const ItemPage = () => {
  const [showModal, setShowModal] = useState(true);
  const { id } = useParams();
  const { type } = useParams();
  const { responseData: movie, error, isLoading } = useFetch(`${specific}${type}/${id}`);


  return (
    <IonContent className="movie-page">
    {isLoading ? (
      <LoadingSpinner />
      ) : (
        <div>
          <ItemTrailer {...movie} />
          <ItemDetails {...movie} />
        </div>
      )}
      </IonContent>
  )
};
export default ItemPage;