import {render, screen} from '@testing-library/react';
import FilmReviews from './film-reviews';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMockComments} from '../../../utils/mocks';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const mockStore = configureMockStore();
const mockComments = createMockComments();

describe('Component: film-reviews', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/film/1');
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <FilmReviews comments={mockComments}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
    expect(screen.getByText(mockComments[2].comment)).toBeInTheDocument();
  });
});
