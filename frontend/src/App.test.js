/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import './utils/matchMedia.mock';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  window.crypto = jest.fn();
  window.crypto.getRandomValues = jest.fn();
  window.getComputedStyle = (eletm, select) => getComputedStyle(eletm, select);
  render(<App />);
  const linkElement = screen.getByText(/Email/i);
  expect(linkElement).toBeInTheDocument();
});
