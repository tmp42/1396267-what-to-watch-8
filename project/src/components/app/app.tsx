import {connect, shallowEqual, useSelector} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainContent from '../main-content/main-content';
import Film from '../film/film';
import LoginScreen from '../login-screen/login-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import FavouriteFilmScreen from '../favourite-film-screen/favourite-film-screen';
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';
import ReviewsScreen from '../reviews-screen/reviews-screen';
import browserHistory from '../../browser-history';
import PrivateRoute from '../private-route/private-route';

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const connector = connect(mapStateToProps);

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded} = useSelector<State, { authorizationStatus: AuthorizationStatus, isDataLoaded: boolean }>((store) => ({
    authorizationStatus: store.authorizationStatus,
    isDataLoaded: store.isDataLoaded,
  }), shallowEqual);
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <BrowserRouter history={browserHistory}>
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
    </BrowserRouter>
  );
}

export {App};
export default connector(App);
