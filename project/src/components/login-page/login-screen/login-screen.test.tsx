import {render, screen} from '@testing-library/react';
import LoginScreen from './login-screen';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMockFilms} from '../../../utils/mocks';
import {AuthorizationStatus} from '../../../const';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const mockStore = configureMockStore();
const mockFilms = createMockFilms();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.NoAuth},
  FILM: {isDataLoaded: true, filmList: mockFilms, genre: 'All genres', countFilm: 8},
});

describe('Component: login-screen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/login');
    render(
      <Provider store={store}>
        <Router history={history}>
          <LoginScreen/>
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
  });
});
