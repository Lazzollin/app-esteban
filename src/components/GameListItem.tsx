import {
  IonButton,
  IonItem,
  IonLabel,
  IonNote,
  } from '@ionic/react';
import { useHistory } from 'react-router';
import { removeGame } from '../firebase/firebaseConfig';
import { Game } from '../models/games';
import './GameListItem.css';

interface GameListItemProps {
  game: Game;
  is_admin: boolean;
}

const GameListItem: React.FC<GameListItemProps> = ({ game, is_admin }) => {
  const game_id = game.id ? game.id : ' '
  const history = useHistory()

  function remove_game() {
    removeGame(game_id).then(() => {
      window.location.reload()
    })
  }
  
  return (
    <IonItem>
    <IonItem routerLink={`/game/${game.id}`} detail={false}>
      <IonLabel className="ion-text-wrap">
        <h2>
          {game.name}
          <span className="date">
            <IonNote>Lanzamiento: {game.date}</IonNote>
          </span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        
      </IonLabel>
    </IonItem>
    { is_admin ? <IonButton href={'/update/'+game.id}>Update</IonButton> : null }
    { is_admin ? <IonButton color='danger' onClick={remove_game}>Delete</IonButton> : null }
    </IonItem>
  );
};

export default GameListItem;
