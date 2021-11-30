import { IonLoading, } from "@ionic/react";

const LoadingSpinner = () => {
  return (
    <IonLoading
      spinner={"lines"}
      cssClass='isLoading'
      isOpen={true}
      keyboardClose={false}
    ></IonLoading>
  )
}; export default LoadingSpinner;