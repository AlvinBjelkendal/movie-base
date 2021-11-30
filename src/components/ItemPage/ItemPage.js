import { IonContent } from "@ionic/react";
import { useState } from "react";
import useFetch from "../useFetch";
import { useParams } from "react-router-dom";
import { specific } from "../../config/config";
import LoadingSpinner from "../LoadingSpinner";
import ItemTrailer from "./ItemTrailer";
import ItemDetails from "./ItemDetails";

const ItemPage = () => {
  const { id } = useParams();
  const { type } = useParams();
  const { responseData: item, error, isLoading } = useFetch(`${specific}${type}/${id}`);


  return (
    <IonContent className="item-page">
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div>
          <ItemTrailer {...item} />
          <ItemDetails {...item} />
        </div>
      )}
    </IonContent>
  )
};
export default ItemPage;