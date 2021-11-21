import {render, screen} from '@testing-library/react';
import LoginButton from './login-button';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMockFilms} from '../../../utils/mocks';
import {AuthorizationStatus} from '../../../const';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const mockStore = configureMockStore();
const mockFilms = createMockFilms();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  FILM: {isDataLoaded: true, filmList: mockFilms, genre: 'All genres', countFilm: 8},
});

describe('Component: login-button', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginButton/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(/Sign out/i)).toBeInTheDocument();

  });
});
