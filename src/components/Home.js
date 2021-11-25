import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./MovieCard";
import useFetch from "./useFetch";
import { trendingday } from "../config/config";
import MovieSlider from "./MovieSlider";

const Home = () => {
  const { responseData: trending, error, isLoading } = useFetch(`${trendingday}`)

  return (
    <IonContent>
      <MovieSlider />
    </IonContent>
  )
};

export default Home;