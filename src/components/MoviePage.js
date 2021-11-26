import { IonContent, IonIcon, IonImg, IonModal, IonTitle } from "@ionic/react";
import { useState } from "react";
import useFetch from "./useFetch";
import { Link, useParams } from "react-router-dom";
import { specificMovie } from "../config/config";
import MovieTrailer from "./MovieTrailer";
import { closeOutline } from "ionicons/icons";
import { img_300 } from "../config/config";
import MoviePageDetails from "./MoviePageDetails";

const MoviePage = () => {
  const [showModal, setShowModal] = useState(true);
  const { id } = useParams();
  const { responseData: movie, error, isLoading } = useFetch(`${specificMovie}${id}`);


  return (
    <IonContent className="movie-page">
      <MovieTrailer {...movie} />
      <MoviePageDetails {...movie} />
    </IonContent>

  )
};
export default MoviePage;