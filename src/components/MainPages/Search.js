import { IonHeader, IonToolbar, IonSearchbar, IonContent, IonList, IonItem, IonLabel, IonPopover, IonLoading } from "@ionic/react";
import { React, useEffect, useState } from "react";
import GenresList from "../Genres/GenresList";
import useFetch from "../useFetch";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";

const Search = () => {
  const [searchText, setSearchText] = useState("")

  const SearchForMovies = () => {
    const { responseData: movies, error, isLoading } = useFetch(`https://api.themoviedb.org/3/search/movie?&query=${searchText}`)
    return (
      <div>
        {error !== null ? (
          <Error />
        ) : (
          <IonList>
            {movies < 1 ? (
              <LoadingSpinner />
            ) : (
              <div>
                {movies.results.map((title) => (
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
    const { responseData: shows, error, isLoading } = useFetch(`https://api.themoviedb.org/3/search/tv?&query=${searchText}`)
    return (
      <div>
        {error !== null ? (
          <Error />
        ) : (
          <IonList>
            {shows < 1 ? (
              <LoadingSpinner />
            ) : (
              <div>
                {shows.results.map((title) => (
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