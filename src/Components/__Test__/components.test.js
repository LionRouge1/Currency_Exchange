import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../Navbar';

const MockNavbar = () => (
  <Router>
    <Navbar />
  </Router>
);

describe('Testing Navbar', () => {
  it('Check if logo if visible', () => {
    render(<MockNavbar />);
    const imgElement = screen.getByAltText(/Exchange logo/i);
    expect(imgElement).toBeVisible();
  });

  it('Check number of link', () => {
    render(<MockNavbar />);
    const linksElement = screen.getByRole('navigation');
    expect(linksElement).toBeInTheDocument();
  });
});