import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import {Films} from '../../types/films';
import {Comment} from '../../types/comments';
import MainContent from '../main-content/main-content';
import Film from '../film/film';
import SignIn from '../login-screen/login-screen';
import AddReview from '../reviews-screen/reviews-screen';
import PlayerScreen from '../player-screen/player-screen';
import NotFoundScreen from '../not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import FavouriteFilmScreen from '../favourite-film-screen/favourite-film-screen';

type AppProps = {
  films: Films[];
  comments: Comment[];
}

function App({films,comments}: AppProps): JSX.Element {
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

export default App;
