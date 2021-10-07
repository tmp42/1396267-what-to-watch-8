import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainContent from '../main-content/main-content';
import Film from '../film/film';
import SignIn from '../login-screen/login-screen';
import AddReview from '../reviews-screen/reviews-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import FavouriteFilmScreen from '../favourite-film-screen/favourite-film-screen';

type MainFilmProps = {
  genre: string;
  release: number;
  promo: string;
}

function App({genre, release, promo}: MainFilmProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MainContent}>
          <MainContent genre={genre} release={release} promo={promo}/>);
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.SignIn}
          render={() => <SignIn/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.MyList}>
          <FavouriteFilmScreen/>
        </Route>
        <Route exact path={AppRoute.Film}>
          <Film/>
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview/>
        </Route>
        <Route exact path={AppRoute.Player}>
          <PlayerScreen/>
        </Route>
        <Route>
          <NotFoundScreen/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
