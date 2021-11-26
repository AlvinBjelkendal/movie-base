import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./MovieCard";
import useFetch from "./useFetch";
import { popularTVShows, topRated, trendingToday, trendingWeek, upcoming } from "../config/config";
import MovieSlider from "./MovieSlider";

const Home = () => {
  return (
    <IonContent>
      <MovieSlider title={"Trending Today"} category={trendingToday} type="movie" />
      <MovieSlider title={"Popular"} category={popularTVShows} type="tv" />
      <MovieSlider title={"Top Rated"} category={topRated} type="movie" />
      <MovieSlider title={"Upcoming"} category={upcoming} type="movie" />
    </IonContent>
  )
};

export default Home;