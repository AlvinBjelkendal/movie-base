import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { filmOutline, searchOutline, tvOutline } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import MoviesHome from "./MainPages/MoviesHome";
import ItemPage from "./TitlePage/TitlePage";
import TvShowsHome from "./MainPages/TvShowsHome";
import Search from "./MainPages/Search";
import GenresPage from "./Genres/GenresPage";

const MyNavBar = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <MoviesHome />
          </Route>
          <Route path="/tvshows">
            <TvShowsHome />
          </Route>
          <Route exact path="/:type/:id/">
            <ItemPage />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/:type/genre/:genre/:id">
            <GenresPage />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        {/*-- Tab bar --*/}
        <IonTabBar slot="bottom" className="tabBar">
          <IonTabButton tab="movies" href="/home" className="nav-button">
            <IonIcon icon={filmOutline} />
            <IonLabel>Movies</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tvshows" href="/tvshows" className="nav-button">
            <IonIcon icon={tvOutline} />
            <IonLabel>TV-Shows</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search" className="nav-button">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default MyNavBar;
