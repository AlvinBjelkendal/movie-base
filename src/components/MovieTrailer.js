import useFetch from "./useFetch";
import { specificMovie, youtubeUrl } from "../config/config";
import { useParams } from "react-router";
import ReactPlayer from 'react-player'
import { IonContent } from "@ionic/react";
import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const MovieTrailer = () => {
  const { id } = useParams();
  const { responseData: trailer, error, isLoading } = useFetch(`${specificMovie}${id}/videos`);

  console.log(trailer)
  return (
    <div>
      {error && <div>{error}</div>}
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ReactPlayer
          url={youtubeUrl + trailer.results[0].key}
          width="100%"
        ></ReactPlayer>
      )}
    </div>
  )
};
export default MovieTrailer;