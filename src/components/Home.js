import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";
import MovieCard from "./MovieCard";

const Home = () => {
  const [trending, setTrending] = useState([])

  useEffect(() => {
    fetchTrending()
  })

  async function fetchTrending() {
    await axios
      .get(`https://api.themoviedb.org/3/trending/all/day`, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      })
      .then((response) => {
        setTrending(response.data.results)
      })
      .catch((error) => {

      });
  }
  return (
    <IonContent>
      <div className="trending">
        {
          trending && trending.map((t) => (
            <MovieCard key={t.id} id={t.id}
              title={t.title || t.name}
              poster={t.poster_path}
              media_type={t.media_type}
              rating={t.vote_average}
            />
          ))
        }
      </div>
    </IonContent>
  )
};

export default Home;