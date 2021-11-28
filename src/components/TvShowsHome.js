import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./ItemCard";
import useFetch from "./useFetch";
import { popularTVShows, topRated, topRatedTVShows, trendingToday, trendingWeek, upcoming } from "../config/config";
import MovieSlider from "./MovieSlider";

const TvShowsHome = () => {
  return (
    <IonContent>
      <MovieSlider title={"Popular right now"} category={popularTVShows} type="tv" />
      <MovieSlider title={"Top rated tv-shows"} category={topRatedTVShows} type="tv" />
    </IonContent>
  )
};

export default TvShowsHome;