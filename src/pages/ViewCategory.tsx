import GameListItem from '../components/GameListItem';
import { useState, useEffect } from 'react';
import { Game, getGamesForCategory } from '../data/games';
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/react';
import { useParams } from 'react-router';

const Home: React.FC = () => {

  const [games, setGames] = useState<Game[]>([]);
  const params = useParams<{ category: string }>();

  useEffect(() => {
      const c = getGamesForCategory(params.category);
      console.log(params.category);
      console.log(c);
            
      setGames(c);
      return () => {
      }
  }, [])

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
            <IonBackButton text="Atras" defaultHref="/home"></IonBackButton>
          </IonButtons>
          <IonTitle>Categoria: {params.category}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonRefresher slot="fixed" onIonRefresh={refresh}>
          <IonRefresherContent></IonRefresherContent>
        </IonRefresher>

        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Inbox
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          {games.map(m => <GameListItem key={m.id} game={m} />)}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Home;
