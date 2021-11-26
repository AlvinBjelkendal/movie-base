import { img_300 } from "../config/config";
import { IonImg } from "@ionic/react";

const MoviePageDetails = (props) => {
  return (
    <div className="movie-page-details">
      <h3>{props.title}</h3>
      <p>{props.release_date + " " + Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min'}</p>
      <IonImg className="movie-page-poster" src={`${img_300}/${props.poster_path}`} alt="poster"></IonImg>
      </div>
  )
};
export default MoviePageDetails;