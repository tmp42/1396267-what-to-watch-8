import {render, screen} from '@testing-library/react';
import FilmButton from './film-button';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMockFilms} from '../../utils/mocks';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

const mockStore = configureMockStore();
const mockFilms = createMockFilms();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  FILM: {isDataLoaded: true, filmList: mockFilms, genre: 'All genres', countFilm: 8},
});


describe('Component: film-button', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/player/2');
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmButton isFavourite idFilm={2} isDetailed/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
  });
});
