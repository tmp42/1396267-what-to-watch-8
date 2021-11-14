import {useSelector} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainContent from '../main-content/main-content';
import Film from '../film-screen/film-screen';
import LoginScreen from '../login-screen/login-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FavouriteFilmScreen from '../favourite-film-screen/favourite-film-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import ReviewsScreen from '../reviews-screen/reviews-screen';
import PrivateRoute from '../private-route/private-route';
import {getAuthorizationStatus} from '../../store/user-data/selector';
import {getIsLoaded} from '../../store/film-data/selector';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

function App(): JSX.Element {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const isDataLoaded = useSelector(getIsLoaded);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <Switch>
      <Route exact path={AppRoute.MainContent}>
        <MainContent/>
      </Route>
      <Route exact path={AppRoute.SignIn}>
        <LoginScreen/>
      </Route>
      <PrivateRoute exact path={AppRoute.MyList} render={({history}) => (<FavouriteFilmScreen/>)}>
      </PrivateRoute>
      <Route exact path={AppRoute.Film}>
        <Film/>
      </Route>
      <PrivateRoute exact path={AppRoute.AddReview} render={({history}) => (<ReviewsScreen/>)}>
      </PrivateRoute>
      <Route exact path={AppRoute.Player}>
        <PlayerScreen/>
      </Route>
      <Route>
        <NotFoundScreen/>
      </Route>
    </Switch>
  );
}

export default App;
