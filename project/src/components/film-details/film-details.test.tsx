import {render, screen} from '@testing-library/react';
import FilmDetails from './film-details';
import {configureMockStore} from '@jedmao/redux-mock-store';
import { createMockFilm} from '../../utils/mocks';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import {AuthorizationStatus} from '../../const';

const mockStore = configureMockStore();
const mockFilms = createMockFilm();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  FILM: {isDataLoaded: true, filmList: mockFilms, genre: 'All genres', countFilm: 8},
});


describe('Component: film-details', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/film/1');
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmDetails film={mockFilms}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(mockFilms.director)).toBeInTheDocument();
  });
});
