import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./MovieCard";
import useFetch from "./useFetch";
import { trendingday } from "../config/config";

const Home = () => {
  const { responseData: trending, error, isLoading } = useFetch(`${trendingday}`)

  return (
    <IonContent>
      {error && <div>{error}</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (

        <div className="trending">
          {
            trending && trending.results.map((t) => (
              <MovieCard key={t.id} id={t.id}
                title={t.title || t.name}
                poster={t.poster_path}
                media_type={t.media_type}
                rating={t.vote_average}
              />
            ))
          }
        </div>
      )
      }
    </IonContent>
  )
};

export default Home;