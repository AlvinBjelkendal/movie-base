import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "../ItemCard";
import useFetch from "../useFetch";
import { popularMovies, topRated, trendingToday, trendingWeek, upcoming } from "../../config/config";
import ItemSlider from "../ItemSlider";

const MoviesHome = () => {
  return (
    <IonContent>
      <ItemSlider title={"Trending Today"} category={trendingToday} type="movie" />
      <ItemSlider title={"Popular right now"} category={popularMovies} type="movie" />
      <ItemSlider title={"Top Rated"} category={topRated} type="movie" />
      <ItemSlider title={"Upcoming"} category={upcoming} type="movie" />
    </IonContent>
  )
};

export default MoviesHome;