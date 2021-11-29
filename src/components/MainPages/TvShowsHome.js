import { IonContent } from "@ionic/react";
import { popularTVShows, topRatedTVShows } from "../../config/config";
import ItemSlider from "../ItemSlider";

const TvShowsHome = () => {
  return (
    <IonContent>
      <ItemSlider title={"Popular Right Now"} category={popularTVShows} type="tv" />
      <ItemSlider title={"Top Rated"} category={topRatedTVShows} type="tv" />
    </IonContent>
  )
};

export default TvShowsHome;