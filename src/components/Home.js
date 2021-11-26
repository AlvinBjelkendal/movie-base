import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./MovieCard";
import useFetch from "./useFetch";
import { topRated, trendingToday, trendingWeek, upcoming } from "../config/config";
import MovieSlider from "./MovieSlider";

const Home = () => {

  return (
    <IonContent>
      <MovieSlider title={"Trending Today"} category={trendingToday} />
      <MovieSlider title={"Trending This Week"} category={trendingWeek} />
      <MovieSlider title={"Top Rated"} category={topRated} />
      <MovieSlider title={"Upcoming"} category={upcoming} />
    </IonContent>
  )
};

export default Home;