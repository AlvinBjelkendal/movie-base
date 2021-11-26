import { IonContent, IonIcon, IonImg, IonModal, IonTitle } from "@ionic/react";
import { useState } from "react";
import useFetch from "./useFetch";
import { Link, useParams } from "react-router-dom";
import { specific } from "../config/config";
import MovieTrailer from "./MovieTrailer";
import { closeOutline } from "ionicons/icons";
import { img_300 } from "../config/config";
import MoviePageDetails from "./MoviePageDetails";
import LoadingSpinner from "./LoadingSpinner";

const MoviePage = () => {
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
          <MovieTrailer {...movie} />
          <MoviePageDetails {...movie} />
        </div>
      )}
      </IonContent>
  )
};
export default MoviePage;