import React from "react";
import {
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
} from "@ionic/react";
import { person } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import Home from "./Home";
import MovieCard from "./MovieCard";

const MyNavBar = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <MovieCard />
          </Route>
          <Route path="/tab3">

          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        {/*-- Tab bar --*/}
        <IonTabBar slot="bottom" className="tabBar">
          <IonTabButton tab="home" href="/home" className="tabButton">
            <IonIcon icon={person} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="" href="/" className="tabButton">
            <IonIcon icon={person} />
            <IonLabel>Trending</IonLabel>
          </IonTabButton>
          <IonTabButton tab="categories" href="/categories" className="tabButton">
            <IonIcon icon={person} />
            <IonLabel>Categories</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default MyNavBar;
