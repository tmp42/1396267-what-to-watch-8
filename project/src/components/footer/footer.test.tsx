import {render, screen} from '@testing-library/react';
import Footer from './footer';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';

describe('Component: Footer', () => {

  it('should render correctly', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <Router history={history}>
        render(<Footer/>);
      </Router>);

    expect(screen.queryByText(/© 2019 What to watch Ltd./i)).toBeInTheDocument();
  });
});
