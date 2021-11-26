import { useState } from "react";
import { IonContent, IonLoading, } from "@ionic/react";

const LoadingSpinner = () => {
  return (
    <IonLoading
      cssClass='isLoading'
      isOpen={true}
      message={'Please wait...'}
    ></IonLoading>
  )


}; export default LoadingSpinner;