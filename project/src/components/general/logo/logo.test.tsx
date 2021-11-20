import { render, screen } from '@testing-library/react';
import Logo from './logo';
import {createMemoryHistory} from 'history';
import {Router} from 'react-router-dom';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        render(<Logo/>);
      </Router>);

    expect(screen.queryByText(/t/i)).toBeInTheDocument();
  });
});
