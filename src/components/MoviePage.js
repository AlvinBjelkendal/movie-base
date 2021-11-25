import { IonContent, IonModal, IonTitle } from "@ionic/react";
import { useState } from "react";
import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { specificMovie } from "../config/config";
import MovieTrailer from "./MovieTrailer";

const MoviePage = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const { responseData: movie, error, isLoading } = useFetch(`${specificMovie}${id}`);
  console.log(movie);
  return (
    <IonContent>
      <IonTitle>{movie.title}</IonTitle>
      <MovieTrailer movie={movie} />
    </IonContent>
  )
};
export default MoviePage;