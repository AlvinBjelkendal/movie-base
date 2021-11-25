import { IonContent, IonIcon, IonModal, IonTitle } from "@ionic/react";
import { useState } from "react";
import useFetch from "./useFetch";
import { Link, useParams } from "react-router-dom";
import { specificMovie } from "../config/config";
import MovieTrailer from "./MovieTrailer";
import { closeOutline } from "ionicons/icons";

const MoviePage = () => {
  const [showModal, setShowModal] = useState(true);
  const { id } = useParams();
  const { responseData: movie, error, isLoading } = useFetch(`${specificMovie}${id}`);

  
  return (
      <IonModal cssClass="movie-modal" isOpen={showModal}>
        <IonIcon color="danger" icon={closeOutline} onClick={() => setShowModal(false)}></IonIcon>
      <MovieTrailer movie={movie} />
      <p>{movie.title}</p>
      </IonModal>
  )
};
export default MoviePage;