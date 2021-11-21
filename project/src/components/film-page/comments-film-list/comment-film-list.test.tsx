import {render, screen} from '@testing-library/react';
import CommentsFilmList from './comments-film-list';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMockComments} from '../../../utils/mocks';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const mockStore = configureMockStore();
const mockComments = createMockComments();


describe('Component: comment-film-list', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/films/3/review');
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <CommentsFilmList comments={mockComments}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(mockComments[0].comment)).toBeInTheDocument();
    expect(screen.getByText(mockComments[1].comment)).toBeInTheDocument();
    expect(screen.getByText(mockComments[2].comment)).toBeInTheDocument();
  });
});
