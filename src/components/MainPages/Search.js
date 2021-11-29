import { IonHeader, IonToolbar, IonSearchbar, IonContent } from "@ionic/react";
import { React, useState } from "react";
import GenresList from "../Genres/GenresList";

const Search = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <IonContent>
      <IonHeader translucent={true}>
        <IonToolbar>
          <IonSearchbar className="searchbar" value={searchText} placeholder={"Search Moviebase"} animated ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <GenresList type="movie" />
      <GenresList type="tv" />
    </IonContent>

  )
}; export default Search;