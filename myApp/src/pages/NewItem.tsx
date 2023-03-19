import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import React from 'react';
import {camera, logoAndroid, logoApple} from "ionicons/icons";

const NewItem: React.FC = () => {
  return (
    <IonPage>

      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref={'/home'}/>
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>

        <IonButton>
          <IonIcon icon={camera} />
          Take Picture
        </IonButton>

        <IonButton>
          <IonIcon ios={logoApple} md={logoAndroid} />
        </IonButton>

      </IonContent>
    </IonPage>
  );
};
export default NewItem;
