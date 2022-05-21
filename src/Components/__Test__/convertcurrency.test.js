import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import ConvertCurrency from '../convertcurrency';
import store from '../../redux/ConfigStore';

const Mockconvertcurrency = () => (
  <Provider store={store}>
    <Router>
      <ConvertCurrency />
    </Router>
  </Provider>
);

it('Number of join mission', () => {
  render(<Mockconvertcurrency />);
  const headElement = screen.getByText(/No graph available yet/i);
  expect(headElement).toBeInTheDocument();
});
