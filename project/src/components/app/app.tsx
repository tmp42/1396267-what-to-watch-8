import {connect, shallowEqual, useSelector} from 'react-redux';
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
import LoadingScreen from '../loading-screen/loading-screen';
import {State} from '../../types/state';
import {Films} from '../../types/films';
import {Comments} from '../../types/comments';

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const connector = connect(mapStateToProps);

function App(): JSX.Element {
  const {authorizationStatus, isDataLoaded, films, comments} = useSelector<State, { authorizationStatus: AuthorizationStatus, isDataLoaded: boolean, films: Films[], comments: Comments[] }>((store) => ({
    authorizationStatus: store.authorizationStatus,
    isDataLoaded: store.isDataLoaded,
    films: store.filmList,
    comments: store.commentsList,
  }), shallowEqual);
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MainContent}>
          <MainContent films={films}/>
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.SignIn}
          render={() => <SignIn/>}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.MyList}>
          <FavouriteFilmScreen favouriteFilm={films}/>
        </Route>
        <Route exact path={AppRoute.Film}>
          <Film aboutFilm={films} comments={comments}/>
        </Route>
        <Route exact path={AppRoute.AddReview}>
          <AddReview reviewsFilm={films}/>
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

export {App};
export default connector(App);
