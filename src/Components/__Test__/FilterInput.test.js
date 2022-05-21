import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterInput from '../FilterInput';

const mockFilter = jest.fn();

describe('Testing FilterInput', () => {
  it('Check number of link', () => {
    render(<FilterInput />);
    const linksElement = screen.getAllByRole('heading');
    expect(linksElement.length).toBe(2);
  });

  it('Check if search input is visible', () => {
    render(<FilterInput />);
    const imgElement = screen.getByPlaceholderText(/search.../i);
    expect(imgElement).toBeVisible();
  });

  it('Check if logo if visible', () => {
    render(<FilterInput />);
    const imgElement = screen.getByPlaceholderText(/search.../i);
    fireEvent.click(imgElement)
    expect(imgElement.textContent).toBe('');
  });

  it('fire on change event', async() => {
    render(<FilterInput 
      filter={mockFilter}
    />);
    const imgElement = screen.getByPlaceholderText(/search.../i);
    fireEvent.change(imgElement, {target: {value: "toto"}})
    expect(imgElement.value).toBe('toto');
  });
});