import {render, screen} from '@testing-library/react';
import AddReview from './add-review';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMockFilms} from '../../utils/mocks';
import {AuthorizationStatus} from '../../const';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const mockStore = configureMockStore();
const mockFilms = createMockFilms();

const store = mockStore({
  USER: {authorizationStatus: AuthorizationStatus.Auth},
  FILM: {isDataLoaded: true, filmList: mockFilms, genre: 'All genres', countFilm: 8},
});

describe('Component: add-review', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/films/3/review');
    render(
      <Provider store={store}>
        <Router history={history}>
          <AddReview/>
        </Router>
      </Provider>,
    );

    expect(screen.getByLabelText('Rating 1')).toBeInTheDocument();
    expect(screen.getByLabelText(/Rating 3/i)).toBeInTheDocument();
  });
});
