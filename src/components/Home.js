import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./MovieCard";
import useFetch from "./useFetch";
import { trendingToday, trendingWeek } from "../config/config";
import MovieSlider from "./MovieSlider";

const Home = () => {

  return (
    <IonContent>
      <MovieSlider title={"Trending Today"} category={trendingToday} />
      <MovieSlider title={"Trending This Week"} category={trendingWeek} />
      <MovieSlider title={"Trending Today"} category={trendingToday} />

    </IonContent>
  )
};

export default Home;