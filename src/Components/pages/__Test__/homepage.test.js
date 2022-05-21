import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Homepage from '../Homepage';
import store from '../../../redux/ConfigStore';
import Currency from '../../Currency';

const MockHomepage = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Homepage />
    </BrowserRouter>
  </Provider>
);

const mockcurrcy = {
  currencyCode: 'GHS',
  countryName: 'Ghana',
  currencyRate: '678',
};

describe('Testing Homepage', () => {
  it('Verified if there is element list in document', () => {
    render(<MockHomepage />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  it('Verified if item is rundered', async () => {
    render(
      <BrowserRouter>
        <Currency
          currcy={mockcurrcy}
        />
      </BrowserRouter>,
    );
    const curElement = await screen.findByTestId('itemGHS');
    expect(curElement).toBeInTheDocument();
  });
});
