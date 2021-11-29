import { useParams } from "react-router";
import { discover, trendingToday } from "../config/config";
import useFetch from "./useFetch";
import { IonContent } from "@ionic/react";
import ItemSlider from "./ItemSlider";

const GenrePage = () => {
  const { type } = useParams();
  const { id } = useParams();
  const { responseData: items, error, isLoading } = useFetch(`${discover}${type}?&with_genres=${id}`);
  console.log(items.results);

  return (
    <IonContent>
      <ItemSlider title={"test"} category={trendingToday} titles={items.results} type="movie" />
    </IonContent>
  )
}; export default GenrePage