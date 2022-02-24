import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import ViewGame from './pages/ViewGame/ViewGame';
import ViewCategory from './pages/Categories/ViewCategory';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Categories from './pages/Categories/Categories';
import Admin from './pages/Admin/Admin';
import Create from './pages/Admin/Create';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { changeAuth } from './firebase/firebaseConfig';
import { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { Update } from './pages/Admin/update';

const App: React.FC = () => {
  const [user, setUser] = useState<string>();
  const [admin, setAdmin] = useState<boolean>(true);
  const [profile, setProfile] = useState<User>();


  useEffect(() => {
    changeAuth(setUser, setAdmin, setProfile)
  }, [])

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact={true}>
            <Redirect to="/home" />
          </Route>
          <Route path="/admin" exact={true}>
            <Admin />
          </Route>
          <Route path="/category" exact={true}>
            <Categories />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/game/:id" exact={true}>
            <ViewGame />
          </Route>
          <Route path="/category/:category" exact={true}>
            <ViewCategory />
          </Route>
          <Route path="/register" exact={true}>
            { !user ? <Register /> : <Redirect to="/home" /> }
          </Route>
          <Route path="/login" exact={true}>
            { !user ? <Login /> : <Redirect to="/home" /> }
          </Route>
          <Route path="/create" exact={true}>
            { admin ? <Create /> : <Redirect to="/home" />}
          </Route>
          <Route path="/update/:id" exact={true}>
            { admin ? <Update /> : <Redirect to="/home" />}
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
