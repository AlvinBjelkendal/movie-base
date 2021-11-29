import { IonHeader, IonToolbar, IonSearchbar, IonContent } from "@ionic/react";
import { React, useState } from "react";
import GenresList from "../Genres/GenresList";
import useFetch from "../useFetch";

const Search = () => {
  const [searchText, setSearchText] = useState('')
  const { responseData: movies, error, isLoading } = useFetch(`https://api.themoviedb.org/3/search/movie?&query=${searchText}`)
  const { responseData: shows } = useFetch(`https://api.themoviedb.org/3/search/tv?&query=${searchText}`)


  return (
    <IonContent>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonSearchbar
            className="searchbar"
            value={searchText}
            placeholder={"Search Titles"}
            onIonChange={((e) => (setSearchText(e.detail.value)))}
            animated ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <GenresList type="movie" />
      <GenresList type="tv" />
    </IonContent>

  )
}; export default Search;