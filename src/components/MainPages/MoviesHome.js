import { IonContent } from "@ionic/react";
import { popularMovies, topRated, trendingToday, upcoming } from "../../config/config";
import TitlesSlider from "../TitlesSlider/TitlesSlider";

const MoviesHome = () => {
  return (
    <IonContent>
      <TitlesSlider title={"Trending Today"} category={trendingToday} type="movie" />
      <TitlesSlider title={"Popular right now"} category={popularMovies} type="movie" />
      <TitlesSlider title={"Top Rated"} category={topRated} type="movie" />
      <TitlesSlider title={"Upcoming"} category={upcoming} type="movie" />
    </IonContent>
  )
};

export default MoviesHome;