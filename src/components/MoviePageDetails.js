import { img_300 } from "../config/config";
import { IonImg } from "@ionic/react";

const MoviePageDetails = (props) => {

  const displayRuntimeInHoursAndMin = () => {
    return (Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'min')
  }

  return (
    <div className="movie-page-details">
      <h3>{props.title}</h3>
      <p>{props.release_date + " " + displayRuntimeInHoursAndMin()}</p>
      <IonImg className="movie-page-poster" src={`${img_300}/${props.poster_path}`} alt="poster"></IonImg>
    </div>
  )
};
export default MoviePageDetails;