import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonRouterLink } from '@ionic/react';
import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>@10Dance Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <img src='assets/classroom.jpg' alt="Classroom"/>
        </IonCard>
        <IonCardHeader>
          <IonCardSubtitle> Attandance Manager </IonCardSubtitle>
          <IonCardTitle>@10Dance</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p>
            @10Dance is an attendance application originally designed to help Sunday School teachers keep track of the students in their classes
          </p>
          <IonRouterLink routerLink="/roster" routerDirection="forward">Roster
          </IonRouterLink>
        </IonCardContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
