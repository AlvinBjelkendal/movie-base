import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { filmOutline, person, searchOutline, tvOutline, videocamOutline } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import MoviesHome from "./MainPages/MoviesHome";
import MovieCard from "./ItemCard";
import ItemPage from "./ItemPage/ItemPage";
import TvShowsHome from "./MainPages/TvShowsHome";
import Search from "./MainPages/Search";

const MyNavBar = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <MoviesHome />
          </Route>
          <Route path="/tv">
            <TvShowsHome />
          </Route>
          <Route exact path="/:type/:id/">
            <ItemPage />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        {/*-- Tab bar --*/}
        <IonTabBar slot="bottom" className="tabBar">
          <IonTabButton tab="home" href="/home" className="nav-button">
            <IonIcon icon={filmOutline} />
            <IonLabel>Movies</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tv" href="/tv" className="nav-button">
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
