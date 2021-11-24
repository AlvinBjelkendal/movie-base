import { useEffect, useState } from "react";
import axios from "axios";
import { IonContent } from "@ionic/react";

const Home = () => {
  const [trending, setTrending] = useState([])
  async function fetchTrending() {
    await axios
      .get(`https://api.themoviedb.org/3/trending/all/day`, {
        headers: { Authorization: `Bearer ${process.env.REACT_APP_API_KEY}` },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {

      });
  }
  useEffect(() => {
    fetchTrending()
  })
  return (
    <IonContent>
      <div className="trending">
        
      </div>
    </IonContent>
  )
};

export default Home;