import { useHistory } from "react-router"
import { IonButton, IonIcon } from "@ionic/react"
import { chevronBackOutline, closeOutline } from "ionicons/icons"

export const BackButton = () => {
  const history = useHistory()

  return (
    <IonButton color="warning" className="back-button" fill="clear" onClick={() => history.goBack()}>
      <IonIcon icon={chevronBackOutline}  ></IonIcon>
    </IonButton>
  )
}