import { render, screen } from '@testing-library/react';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';
import NotFoundScreen from './not-found-screen';

describe('Component: not-found', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/123');
    render(
      <Router history={history}>
        render(<NotFoundScreen/>);
      </Router>);

    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
  });
});
