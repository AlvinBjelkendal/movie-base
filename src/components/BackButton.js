import { useHistory } from "react-router"
import { IonButton, IonIcon } from "@ionic/react"
import { arrowBackOutline, closeOutline } from "ionicons/icons"

export const BackButton = () => {
  const history = useHistory()

  return (
    <IonButton className="close-popover" size="small" fill="clear" onClick={() => history.goBack()}>
      <IonIcon icon={closeOutline}  ></IonIcon>
    </IonButton>
  )
}