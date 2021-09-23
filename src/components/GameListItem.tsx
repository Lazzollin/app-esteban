import {
  IonItem,
  IonLabel,
  IonNote
  } from '@ionic/react';
import { Game } from '../data/games';
import './GameListItem.css';

interface GameListItemProps {
  game: Game;
}

const GameListItem: React.FC<GameListItemProps> = ({ game }) => {
  return (
    <IonItem routerLink={`/game/${game.id}`} detail={false}>
      <IonLabel className="ion-text-wrap">
        <h2>
          {game.fromName}
          <span className="date">
            <IonNote>Lanzamiento: {game.date}</IonNote>
          </span>
        </h2>
        <img src={game.img} alt="ashi" height="50px" width="50px"/>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </IonLabel>
    </IonItem>
  );
};

export default GameListItem;
