import {render, screen} from '@testing-library/react';
import FilmList from './film-list';
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


describe('Component: film-list', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Provider store={store}>
        <Router history={history}>
          <FilmList films={mockFilms}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(mockFilms[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockFilms[1].name)).toBeInTheDocument();
    expect(screen.getByText(mockFilms[5].name)).toBeInTheDocument();
  });
});
