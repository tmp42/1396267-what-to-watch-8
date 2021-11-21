import {render, screen} from '@testing-library/react';
import CommentFilm from './comment-film';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {createMockComment} from '../../../utils/mocks';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

const mockStore = configureMockStore();
const mockComments = createMockComment();


describe('Component: comment-film', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/films/3/review');
    render(
      <Provider store={mockStore({})}>
        <Router history={history}>
          <CommentFilm comment={mockComments}/>
        </Router>
      </Provider>,
    );

    expect(screen.getByText(mockComments.comment)).toBeInTheDocument();
  });
});
