import { IonHeader, IonTitle, IonToolbar, IonSearchbar, IonGrid, IonRow, IonCol } from "@ionic/react";
import { React, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState('')

  return (
    <div>
      <IonHeader translucent={true}>
        <IonToolbar>
            <IonSearchbar className="searchbar" value={searchText} placeholder={"Search Moviebase"} animated ></IonSearchbar>
        </IonToolbar>
      </IonHeader>
    </div>
  )
}; export default Search;