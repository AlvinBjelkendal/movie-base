import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./MovieCard";
import useFetch from "./useFetch";
import { trendingday } from "../config/config";
import MovieSlider from "./MovieSlider";

const Home = () => {

  return (
    <IonContent>
      <MovieSlider category = {trendingday} />
      
    </IonContent>
  )
};

export default Home;