import { IonContent, IonIcon, IonImg, IonModal, IonTitle } from "@ionic/react";
import { useState } from "react";
import useFetch from "./useFetch";
import { Link, useParams } from "react-router-dom";
import { specificMovie } from "../config/config";
import MovieTrailer from "./MovieTrailer";
import { closeOutline } from "ionicons/icons";
import { img_300 } from "../config/config";

const MoviePage = () => {
  const [showModal, setShowModal] = useState(true);
  const { id } = useParams();
  const { responseData: movie, error, isLoading } = useFetch(`${specificMovie}${id}`);


  return (
    <IonContent className="movie-page">
      <MovieTrailer movie={movie} />
      <div className="movie-page-details">
      <h3>{movie.title}</h3>
      <p>{movie.release_date + " " + Math.floor(movie.runtime / 60) + 'h ' + movie.runtime % 60 + 'min'}</p>
      <IonImg className="movie-page-poster" src={`${img_300}/${movie.poster_path}`} alt="poster"></IonImg>
      </div>
    </IonContent>

  )
};
export default MoviePage;