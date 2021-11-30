import { IonHeader, IonToolbar, IonSearchbar, IonIcon, IonContent, IonList, IonItem, IonLabel, IonPopover, IonLoading, IonListHeader } from "@ionic/react";
import { React, useEffect, useState } from "react";
import GenresList from "../Genres/GenresList";
import useFetch from "../useFetch";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";
import { filmOutline, tvOutline } from "ionicons/icons";

const Search = () => {
  const [searchText, setSearchText] = useState("")

  const SearchForMovies = () => {
    const { responseData: movies, error } = useFetch(`https://api.themoviedb.org/3/search/movie?&query=${searchText}`)
    return (
      <div>
        {error !== null ? (
          <Error />
        ) : (
          <IonList>
            <IonListHeader lines="inset">
              <IonIcon color="warning" className="icon" icon={filmOutline}></IonIcon>
              Movies</IonListHeader>
            {movies < 1 ? (
              <LoadingSpinner />
            ) : (
              <div>
                {movies.results.sort((a, b) => b.popularity - a.popularity).map((title) => (
                  <IonItem key={title.id}>
                    <IonLabel>{title.title || title.name}</IonLabel>
                  </IonItem>
                ))}
              </div>
            )}
          </IonList>
        )}
      </div>
    )
  }

  const SearchForShows = () => {
    const { responseData: shows, error } = useFetch(`https://api.themoviedb.org/3/search/tv?&query=${searchText}`)
    return (
      <div>
        {error !== null ? (
          <Error />
        ) : (
          <IonList>
            <IonListHeader lines="inset">
              <IonIcon color="warning" className="icon" icon={tvOutline}></IonIcon>
              TV-Shows</IonListHeader>
            {shows < 1 ? (
              <LoadingSpinner />
            ) : (
              <div>
                {shows.results.sort((a, b) => b.popularity - a.popularity).map((title) => (
                  <IonItem key={title.id}>
                    <IonLabel>{title.title || title.name}</IonLabel>
                  </IonItem>
                ))}
              </div>
            )}
          </IonList>
        )}
      </div>
    )
  }

  return (
    <IonContent>
      <div>
        <IonHeader translucent={true}>
          <IonToolbar>
            <IonSearchbar
              className="searchbar"
              value={searchText}
              placeholder={"Search Titles"}
              onIonChange={(e) => setSearchText(e.detail.value)}
              animated ></IonSearchbar>
          </IonToolbar>
        </IonHeader>
        {searchText.length < 3 ? (
          <div>
            <GenresList type="movie" />
            <GenresList type="tv" />
          </div>
        ) : (
          <div>
            <SearchForMovies />
            <SearchForShows />
          </div>)}
      </div>
    </IonContent>

  )
}; export default Search;