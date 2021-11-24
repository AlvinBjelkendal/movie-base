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
import Tab1 from "../pages/Tab1";
import Tab2 from "../pages/Tab2";
import Tab3 from "../pages/Tab3";

const MyNavBar = () => {
  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
        <Route exact path="/tab1">
            <Tab1 />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
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
          <IonTabButton tab="trending" href="/trending" className="tabButton">
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
