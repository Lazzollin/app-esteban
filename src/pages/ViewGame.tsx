import { useState } from 'react';
import { Game, getGame } from '../data/games';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonNote,
  IonPage,
  IonToolbar,
  useIonViewWillEnter,
} from '@ionic/react';
import { useParams } from 'react-router';
import './ViewGame.css';

function ViewGame() {
  const [game, setGame] = useState<Game>();
  const params = useParams<{ id: string }>();

  useIonViewWillEnter(() => {
    const gm = getGame(parseInt(params.id, 10));
    setGame(gm);
  });

  return (
    <IonPage id="view-game-page">
      <IonHeader translucent>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Atras" defaultHref="/home"></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        {game ? (
          <>
            <IonItem>
              <img src={game.img} alt="ashi" height="50px" width="50px" className="viewgame-img"/>
              <IonLabel className="ion-text-wrap">
                <h2>
                  {game.fromName}
                  <span className="date">
                    Lanzamiento:<IonNote>{game.date}</IonNote>
                  </span>
                </h2>
              </IonLabel>
            </IonItem>

            <div className="ion-padding">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="categories-container">
              Categorias: {getGameCategories(game.categories)}
            </div>
          </>
        ) : (
          <div>Game not found</div>
        )}
      </IonContent>
    </IonPage>
  );
}

function getGameCategories(gameCategories: Array<String>) {
  var categories = gameCategories.map((x, key) => {
    return <a key={key} className="category-a" href={"/category/" + x}>{x}</a>
  })

  return categories
}

export default ViewGame;
