import { IonModal } from "@ionic/react";
import { useState } from "react";

const MoviePage = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <IonModal isOpen={showModal}>

    </IonModal>
  )
};
export default MoviePage;