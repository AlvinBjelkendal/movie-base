import useFetch from "./useFetch";
import { specificMovie, youtubeUrl } from "../config/config";
import { useParams } from "react-router";
import ReactPlayer from 'react-player'
import { IonContent } from "@ionic/react";
import { useEffect, useState } from "react";

const MovieTrailer = () => {
  const { id } = useParams();
  const { responseData: trailer, error, isLoading } = useFetch(`${specificMovie}${id}/videos`);

  console.log(trailer)
  return (
    <IonContent>
      {error && <div>{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ReactPlayer
          url={youtubeUrl + trailer.results[0].key}
          width="100%"
        ></ReactPlayer>
      )}
    </IonContent>
  )
};
export default MovieTrailer;