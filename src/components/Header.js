import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar className="header">
      <IonTitle color="warning" className="header-title">MOVIEBASE</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};
export default Header;