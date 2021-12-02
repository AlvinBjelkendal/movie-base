import { IonContent } from "@ionic/react";
import { popularTVShows, topRatedTVShows } from "../../config/config";
import TitlesSlider from "../TitlesSlider/TitlesSlider";

const TvShowsHome = () => {
  return (
    <IonContent>
      <TitlesSlider title={"Popular Right Now"} category={popularTVShows} type="tv" />
      <TitlesSlider title={"Top Rated"} category={topRatedTVShows} type="tv" />
    </IonContent>
  )
};

export default TvShowsHome;