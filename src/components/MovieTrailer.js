import useFetch from "./useFetch";
import { specificMovie, youtubeUrl } from "../config/config";
import { useParams } from "react-router";
import ReactPlayer from 'react-player'
import { IonContent } from "@ionic/react";

const MovieTrailer = ({movie}) => {
  const { responseData: trailer, error, isLoading } = useFetch(`${specificMovie}${movie.id}/videos`);

  console.log(movie.id)
  return (
    <IonContent>
      {error && <div>{error}</div>}
      <ReactPlayer
        url={youtubeUrl + trailer.video.key}
        playing
        width="100%"
      ></ReactPlayer>
    </IonContent>
  )
};
export default MovieTrailer;