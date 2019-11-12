import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol} from '@ionic/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { add } from 'ionicons/icons';
import './home.css'
import data from './input.json'


const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <h1 id="title">Lot App</h1>
        <IonGrid>
          <IonGrid class = "grid">
            <IonGrid>
              <IonRow>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
              </IonRow>
            </IonGrid>
            <IonGrid>
              <IonRow>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
              </IonRow>
              <IonRow>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
                <IonCol size="1" class="whiteCol"> </IonCol>
                <IonCol size="1" class={data["A2"]}> </IonCol>
                <IonCol size=".1" class="divider"> </IonCol>
                <IonCol size="1" class={data["A1"]}> </IonCol>
              </IonRow>
            </IonGrid>
          </IonGrid>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
