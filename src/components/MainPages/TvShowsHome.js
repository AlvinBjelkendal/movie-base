import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "../ItemCard";
import useFetch from "../useFetch";
import { popularTVShows, topRated, topRatedTVShows, trendingToday, trendingWeek, upcoming } from "../../config/config";
import ItemSlider from "../ItemSlider";

const TvShowsHome = () => {
  return (
    <IonContent>
      <ItemSlider title={"Popular right now"} category={popularTVShows} type="tv" />
      <ItemSlider title={"Top rated tv-shows"} category={topRatedTVShows} type="tv" />
    </IonContent>
  )
};

export default TvShowsHome;