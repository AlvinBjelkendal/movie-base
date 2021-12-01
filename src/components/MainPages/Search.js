import { IonHeader, IonToolbar, IonSearchbar, IonIcon, IonContent, IonList, IonItem, IonLabel, IonImg, IonListHeader } from "@ionic/react";
import { React, useState } from "react";
import GenresList from "../Genres/GenresList";
import useFetch from "../useFetch";
import LoadingSpinner from "../LoadingSpinner";
import Error from "../Error";
import { chevronForwardOutline, filmOutline, tvOutline } from "ionicons/icons";
import { img_300, posterPlaceholder } from "../../config/config";
import { Link } from "react-router-dom";

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
                  <Link key={title.id} className="item-link" to={`/movie/${title.id}`}>
                    <IonItem key={title.id}>
                      {title.poster_path === null ? (
                        <IonImg className="search-image" src={posterPlaceholder} alt="poster" />
                      ) : (
                        <IonImg alt="poster" className="search-image" src={`${img_300}/${title.poster_path}`}> </IonImg>
                      )}
                      <IonLabel>{title.title || title.name}</IonLabel>
                      <IonIcon icon={chevronForwardOutline}></IonIcon>
                    </IonItem>
                  </Link>
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
                  <Link key={title.id} className="item-link" to={`/tv/${title.id}`}>
                    <IonItem key={title.id}>
                      {title.poster_path === null ? (
                        <IonImg className="search-image" src={posterPlaceholder} alt="poster" />
                      ) : (
                        <IonImg alt="poster" className="search-image" src={`${img_300}/${title.poster_path}`}> </IonImg>
                      )}
                      <IonLabel>{title.title || title.name}</IonLabel>
                      <IonIcon icon={chevronForwardOutline}></IonIcon>
                    </IonItem>
                  </Link>
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