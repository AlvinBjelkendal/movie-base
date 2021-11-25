import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar className="header">
      <IonTitle  className="header-title">MOVIEBASE</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;