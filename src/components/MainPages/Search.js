import { IonHeader, IonToolbar, IonSearchbar, IonContent, IonList, IonItem, IonLabel, IonPopover } from "@ionic/react";
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
      <IonContent>
        {error !== null ? (
          <Error />
        ) : (
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <IonList>
                {movies.results.map((title) => (
                  <IonItem>
                    <IonLabel>{title.title || title.name}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            )}
          </div>
        )}
      </IonContent>
    )
  }

  const SearchForShows = () => {
    const { responseData: shows, error, isLoading } = useFetch(`https://api.themoviedb.org/3/search/tv?&query=${searchText}`)
    return (
      <IonContent>
        {error !== null ? (
          <Error />
        ) : (
          <div>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <IonList>
                {shows.results.map((title) => (
                  <IonItem>
                    <IonLabel>{title.title || title.name}</IonLabel>
                  </IonItem>
                ))}
              </IonList>
            )}
          </div>
        )}
      </IonContent>
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
        <GenresList type="movie" />
        <GenresList type="tv" />
      </div>
    </IonContent>

  )
}; export default Search;